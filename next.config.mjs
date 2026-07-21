/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      // Add any other domains you plan to load images from below
      // {
      //   protocol: 'https',
      //   hostname: 'your-other-domain.com',
      // },
    ],
  },
};

export default nextConfig;
