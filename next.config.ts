// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   experimental: {},
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "flagcdn.com",
//         pathname: "/**", // Adjusted to match all paths for `flagcdn.com`
//       },
//       {
//         protocol: "https",
//         hostname: "xcmumwwxdumpgaqwyavz.supabase.co",
//         pathname: "/w20/**", // Keeps the `/w20` pattern
//         // Alternate pathname (uncomment if needed):
//         // pathname: "/storage/v1/object/public/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**", // This is already fine for flagcdn.com
      },
      {
        protocol: "https",
        hostname: "xcmumwwxdumpgaqwyavz.supabase.co",
        pathname: "/storage/v1/object/public/**", // Adjusted to match the full image path
      },
    ],
  },
};

export default nextConfig;
