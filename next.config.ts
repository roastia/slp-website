import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.slprecordings.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      // 旧: 専用ページとして実装していた際の内部URL → 現行のURLへの保険用リダイレクト
      { source: "/impressionists", destination: "/artists/impressionists/", permanent: true },
      { source: "/impressionists/", destination: "/artists/impressionists/", permanent: true },
      {
        source: "/from-here_impressionists",
        destination: "/catalog/from-here_impressionists/",
        permanent: true,
      },
      {
        source: "/from-here_impressionists/",
        destination: "/catalog/from-here_impressionists/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
