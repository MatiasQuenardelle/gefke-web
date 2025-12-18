import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Files to exclude from blog listing (not actual blog posts)
const EXCLUDED_FILES = ['BLOG_POST_OUTLINES.md', 'README.md'];

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter(name => {
      // Must be markdown file
      if (!name.endsWith('.md') && !name.endsWith('.mdx')) return false;
      // Exclude non-blog files
      if (EXCLUDED_FILES.includes(name)) return false;
      return true;
    })
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Skip files without valid frontmatter (must have title and date)
      if (!data.title || !data.date) {
        return null;
      }

      return {
        slug,
        content,
        ...data,
      };
    })
    .filter(Boolean) // Remove null entries
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPosts;
}

export function getPostBySlug(slug) {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

export function getAllPostSlugs() {
  // Reuse getAllPosts to ensure consistent filtering
  const posts = getAllPosts();
  return posts.map(post => post.slug);
}
