import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/loan-programs/first-time-buyer",
        destination: "/first-time-homebuyer-charlotte",
        permanent: true,
      },
      {
        source: "/loan-programs/va",
        destination: "/va-loans-charlotte",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
