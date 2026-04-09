import { metadata } from "next";

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

export const metadata = {
  title: "Robots.txt | CEPE Alemanha",
  description: "Diretrizes para rastreamento de bots no site do CEPE Alemanha.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
