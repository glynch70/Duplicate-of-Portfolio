/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 90],
  },
  // Disable Turbopack - use webpack for reliable Tailwind CSS v3 support
  // Turbopack has issues with PostCSS plugin loading and caching
  webpack: (config, { dev, isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
