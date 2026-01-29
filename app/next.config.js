/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          // 1. HSTS — Force HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // 2. CSP — Prevent XSS
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self';",
          },

          // 3. Prevent Clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          // 4. Prevent MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // 5. Basic Referrer Policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
