import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Indian Actor`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070706",
    theme_color: "#070706",
    icons: [
      {
        src: "/favicon.svg?v=2",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
