/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 640],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320],
    formats: ["image/avif", "image/webp"],
  },
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

module.exports = withBundleAnalyzer(nextConfig);