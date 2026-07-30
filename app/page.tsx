import PortfolioExperience from "./portfolio-experience";
import { siteConfig } from "./site-config";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-IN",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#anuragg-sharma`,
        name: siteConfig.name,
        alternateName: "Anurag Sharma",
        url: siteConfig.url,
        image: `${siteConfig.url}/anurag-representation.webp`,
        mainEntityOfPage: {
          "@id": `${siteConfig.url}/#website`,
        },
        jobTitle: "Actor",
        description:
          "Indian actor working across feature films, OTT productions, web series, television, music videos, and commercials.",
        birthPlace: {
          "@type": "Place",
          name: "Haryana, India",
        },
        homeLocation: {
          "@type": "City",
          name: "Chandigarh, India",
        },
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        knowsLanguage: ["Hindi", "Haryanvi", "English"],
        sameAs: [siteConfig.youtube],
        memberOf: [
          {
            "@type": "Organization",
            name: "Cine & TV Artistes’ Association (CINTAA)",
          },
          {
            "@type": "Organization",
            name: "Indian Motion Picture Producers’ Association (IMPPA)",
          },
          {
            "@type": "Organization",
            name: "Screenwriters Association (SWA)",
          },
        ],
        knowsAbout: [
          "Feature films",
          "OTT productions",
          "Web series",
          "Television",
          "Music videos",
          "Commercials",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <PortfolioExperience />
    </>
  );
}
