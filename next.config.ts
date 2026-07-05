import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Ảnh hiện là placeholder từ picsum (host ngoài, chậm). Tắt tối ưu server để
    // dev/nav nhanh hơn. KHI CÓ ẢNH THẬT trên CDN: bật lại (xóa dòng dưới) để đạt Lighthouse.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default nextConfig;
