/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from "next";
import { hostname } from 'os';


const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};
// 
export default nextConfig;
