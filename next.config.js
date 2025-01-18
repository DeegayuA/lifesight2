/** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'standalone',
      eslint: {
        ignoreDuringBuilds: true,
      },
      images: { unoptimized: true },
      reactStrictMode: false,
      swcMinify: false,
    };

    module.exports = nextConfig;
