/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  target: "serverless",
  trailingSlash: true, // Optional: Add trailing slashes to your URLs for better compatibility with Next.js
  zones: [
    {
      name: "a-tech",
      path: "/",
      component: "./a-tech/src/app/page.js",
    },
    {
      name: "products",
      path: "/products",
      component: "./products/src/App.jsx",
    },
    {
      name: "team-page",
      path: "/team",
      component: "./team-page/app/page.tsx",
    },
  ],
};