/** @type {import('next').NextConfig} */
const nextConfig = {
  // …your existing config
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;