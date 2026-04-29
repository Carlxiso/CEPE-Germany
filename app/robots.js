export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/login"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/terms", "/privacy"],
      },
    ],
    sitemap: "https://cepealemanha.de/sitemap.xml",
  };
}
