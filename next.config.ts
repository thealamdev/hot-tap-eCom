/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pagpackaging.com',
      },
      {
        protocol: 'https',
        hostname: 'www.matteralpha.com',
      },
      {
        protocol: 'https',
        hostname: 'sc04.alicdn.com',
      },
      // Add more if you change images later
    ],
  },
};

export default nextConfig;