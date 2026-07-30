import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Anuragg Sharma — Every frame. Fully lived.",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Actor Portfolio",
  keywords: [
    "Anuragg Sharma",
    "Anurag Sharma actor",
    "Indian actor",
    "Haryana actor",
    "Chandigarh actor",
    "Juni The Last Player",
    "Two Great Masters",
    "Uddand",
    "OTT actor India",
    "Hindi actor portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Anuragg Sharma — Indian Actor",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "profile",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
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
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: {
      url: "/favicon.svg?v=2",
      type: "image/svg+xml",
    },
    shortcut: "/favicon.svg?v=2",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#070706",
  colorScheme: "dark",
};

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
