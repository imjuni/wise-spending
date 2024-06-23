import nextBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = nextBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });
const withNextIntlPlugin = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfigValue = {
  output: 'export',
  reactStrictMode: process.env.RUN_MODE === 'develop',
  assetPrefix: '/wise-spending',
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

const nextConfig =
  process.env.RUN_MODE === 'local'
    ? withNextIntlPlugin(withBundleAnalyzer(nextConfigValue))
    : withNextIntlPlugin(nextConfigValue);

export default nextConfig;
