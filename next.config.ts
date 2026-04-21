/** @type {import('next').NextConfig} */
const nextConfig = {};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

module.exports = withBundleAnalyzer(nextConfig);