/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"], // Allows images from utfs.io domain
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/, // Matches .mjs files
      include: /node_modules/, // Applies only to node_modules
      type: "javascript/auto", // Processes .mjs files as ES modules
    });

    return config; // Returns the modified Webpack config
  },
};

export default nextConfig;
