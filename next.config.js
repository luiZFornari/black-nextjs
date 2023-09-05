// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["store.storeimages.cdn-apple.com"],
  },
  staticPageGenerationTimeout: 100,
};

module.exports = nextConfig;
