const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "Anuragg Sharma",
  title: "Anuragg Sharma — Indian Actor",
  description:
    "Official portfolio of Indian actor Anuragg Sharma, featuring selected work across feature films, OTT, web series, television, music videos, and commercials.",
  url: (configuredUrl || "https://anuragg-sharma.vercel.app").replace(/\/$/, ""),
  email: "info@anuraggsharma.com",
  phone: "+919878984849",
  youtube: "https://www.youtube.com/@AnuraggSharmajuni/featured",
} as const;
