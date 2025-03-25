/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Important for static export
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    domains: ["utfs.io"],
  },

  // Custom Webpack configuration to handle .mjs files properly.
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },

  // Optional: Enable React Strict Mode for development, which helps with debugging.
  reactStrictMode: true,

  // Configure basePath for GitHub Pages deployment.
  basePath: '/live',  // This is your GitHub repository name. Adjust to '/live' because it's the name of your repository.
  assetPrefix: '/live', // Helps load static assets correctly

  // Optional: Enable support for static export if you plan to use `next export`.
  trailingSlash: true, // Adds trailing slash for all URLs (needed for static export).
};

export default nextConfig;
