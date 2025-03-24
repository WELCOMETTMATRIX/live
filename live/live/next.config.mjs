/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image domains to optimize images from external sources.
  images: {
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

  // Optional: Configure basePath for deployment in subdirectories (e.g., GitHub Pages).
  // Uncomment and update if you're deploying to GitHub Pages or similar services.
  basePath: '/https://github.com/WELCOMETTMATRIX/live',  // Adjust to match your repository name (if necessary).

  // Optional: Enable support for static export if you plan to use `next export`.
  trailingSlash: true, // Adds trailing slash for all URLs (needed for static export).
};

export default nextConfig;
