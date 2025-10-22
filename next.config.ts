import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production' //new
const repo = 'KRCportfolio' // new

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? `/${repo}` : '', // new 
  assetPrefix: isProd ? `/${repo}/` : '', //new 

  images: {
    unoptimized: true,
  },
  // basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : "",

};

export default nextConfig;
