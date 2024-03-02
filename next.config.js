/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: "d9e1efecb268d01922e2f335d9e5ccbb",
    API_TOKEN:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWUxZWZlY2IyNjhkMDE5MjJlMmYzMzVkOWU1Y2NiYiIsInN1YiI6IjYzMGE3NzVmNmU5MzhhMDA5MjM4NWY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ypSc6vkd0tzBPQRgUs_OnbQVqktIhRewixEAr7k9yMc",
  },
  images: {
    domains: [
      "tmdb.org",
      "themoviedb.org",
      "www.api.themoviedb.org",
      "www.themoviedb.org",
      "image.tmdb.org",
    ],
  },
};

module.exports = nextConfig;
