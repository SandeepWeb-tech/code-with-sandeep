import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export'
  // images: {
  //   domains: ['m.media-amazon.com', "th.bing.com", "example.com", "cdn.myapp.com", "cdn.pixabay.com", "images.ctfassets.net"], // add allowed domains here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // 👈 allows all HTTPS domains
      },
    ],
  },
};

export default nextConfig;


// we can configure next js ..