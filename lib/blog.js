import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Files to exclude from blog listing (not actual blog posts)
const EXCLUDED_FILES = ['BLOG_POST_OUTLINES.md', 'README.md'];

// Supported languages
const SUPPORTED_LANGUAGES = ['da', 'en', 'es'];
const DEFAULT_LANGUAGE = 'da';

export function getAllPosts(lang = null) {
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

      // Default language is Danish if not specified
      const postLang = data.lang || DEFAULT_LANGUAGE;

      return {
        slug,
        content,
        lang: postLang,
        ...data,
      };
    })
    .filter(Boolean) // Remove null entries
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  // If no language filter specified, return all posts
  if (!lang) {
    return allPosts;
  }

  // Filter posts by language, with fallback to Danish
  const filteredPosts = [];
  const slugsAdded = new Set();

  // First, add posts in the requested language
  for (const post of allPosts) {
    if (post.lang === lang) {
      filteredPosts.push(post);
      slugsAdded.add(post.slug);
    }
  }

  // Then add Danish fallback posts for slugs we don't have yet
  if (lang !== DEFAULT_LANGUAGE) {
    for (const post of allPosts) {
      if (post.lang === DEFAULT_LANGUAGE && !slugsAdded.has(post.slug)) {
        filteredPosts.push({ ...post, isFallback: true });
        slugsAdded.add(post.slug);
      }
    }
  }

  return filteredPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
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
