/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.THEMOVIEDB_API_KEY,
    API_TOKEN: process.env.THEMOVIEDB_API_TOKEN,
  },
  images: {
    domains: ["tmdb.org", "themoviedb.org", "www.api.themoviedb.org", "www.themoviedb.org", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
