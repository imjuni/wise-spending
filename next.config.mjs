import nextBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = nextBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });
const withNextIntlPlugin = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/wise-spending' : '';

console.log('BASE_PATH: ', basePath);

/** @type {import('next').NextConfig} */
const nextConfigValue = {
  /**
   * BASE_PATH는 자동 적용이 되는 것과 그렇지 않은 것이 있다. Link는 자동 적용이고, Image는 직접 적용해야 한다
   * 그래서 ENV로 넘겨주고, 직접 적용해야 하는 경우 이것을 사용한다
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  output: 'export',
  reactStrictMode: process.env.RUN_MODE === 'develop',
  assetPrefix: isProd ? 'https://imjuni.github.io/wise-spending' : undefined,
  basePath: basePath,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

const nextConfig =
  process.env.RUN_MODE === 'local'
    ? withNextIntlPlugin(withBundleAnalyzer(nextConfigValue))
    : withNextIntlPlugin(nextConfigValue);

export default nextConfig;
