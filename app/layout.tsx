import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Anuragg Sharma — Every frame. Fully lived.",
    description:
      "Official portfolio of Indian actor Anuragg Sharma. Feature films, OTT, web series, television, music videos, and commercials.",
    keywords: [
      "Anuragg Sharma",
      "Anurag Sharma actor",
      "Indian actor",
      "Juni The Last Prayer",
      "Two Great Masters",
      "Uddand",
    ],
    openGraph: {
      title: "Anuragg Sharma — Every frame. Fully lived.",
      description:
        "Indian actor working across feature films, OTT, television, music videos, and commercials.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1731,
          height: 909,
          alt: "Anuragg Sharma — Indian Actor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Anuragg Sharma — Indian Actor",
      description: "Every frame. Fully lived.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
