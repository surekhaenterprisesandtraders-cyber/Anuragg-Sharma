import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-30T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
