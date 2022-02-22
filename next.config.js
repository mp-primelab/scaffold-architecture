/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: ['occ-0-3061-2186.1.nflxso.net'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
