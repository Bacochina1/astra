/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      domains: ['localhost'],
      unoptimized: false,
      loader: 'imgix',
      path: 'localhost:3000',
    },
  }
  
  if (!process.env.PRODUCTION) {
    nextConfig.images = { unoptimized: true }
  }
  
  export default nextConfig
  