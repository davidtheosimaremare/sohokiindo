import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/produk",
        destination: "https://shop.hokiindo.co.id",
        permanent: true,
      },
      {
        source: "/produk/:path*",
        destination: "https://shop.hokiindo.co.id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
