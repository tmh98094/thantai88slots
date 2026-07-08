import { absoluteUrl, site } from "@/lib/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}#organization`,
        name: site.name,
        url: site.url,
        logo: absoluteUrl(site.logoPath),
        sameAs: ["https://thantai88.online", "https://thantai88.group", "https://thantai88.site"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        name: site.name,
        url: site.url,
        inLanguage: "vi-VN",
        publisher: { "@id": `${site.url}#organization` },
        about: ["slot online", "jackpot", "RTP", "độ biến động slot", "ưu đãi slot", "iGaming 18+"],
      },
    ],
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
