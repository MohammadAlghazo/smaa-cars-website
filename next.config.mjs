/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  devIndicators: { buildActivity: false },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    // ✅ Configure remote patterns for uploaded images from common storage URLs
    // When migrating to Cloudinary or Vercel Blob, add their domains here:
    // e.g., { protocol: 'https', hostname: 'res.cloudinary.com' }
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
