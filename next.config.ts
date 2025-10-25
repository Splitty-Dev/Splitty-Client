import type { NextConfig } from "next";
import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = withPWA({
  dest: "public", // service-worker 파일 생성 위치
  disable: isDev, // 개발환경에선 비활성화
})({
  reactStrictMode: true,
  experimental: {
    appDir: true, // App Router 사용 시 필요
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "splitty-bucket.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
});

export default nextConfig;
