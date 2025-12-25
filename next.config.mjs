import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO - Disable trailing slashes to prevent redirect loops
  trailingSlash: false,

  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true, // Enable React strict mode for better performance

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons'], // Tree-shake icon libraries
  },
};

export default withBundleAnalyzer(nextConfig);
