/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js',
      async: true,
    },
  ],
}
 
module.exports = nextConfig
