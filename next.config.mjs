/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: { buildActivity: false },
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
