import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The standalone /approach essays were folded into the issue itself
  // (homepage §I On Method) when the Feature-issue IA landed; the old
  // URLs forward into the issue permanently.
  async redirects() {
    return [
      {
        source: '/approach',
        destination: '/#method',
        permanent: true,
      },
      {
        source: '/zh/approach',
        destination: '/zh#method',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
