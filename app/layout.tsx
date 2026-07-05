import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GsapEntrance } from "@/components/gsap-entrance";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Thantai88Slots | Slot online 18+ thuộc Thantai88", template: "%s | Thantai88Slots" },
  description: site.description,
  applicationName: site.name,
  keywords: ["Thantai88Slots", "slot online", "game slot", "jackpot", "casino online", "slot Việt Nam", "thantai888.co"],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.name,
    title: "Thantai88Slots | Slot online 18+ thuộc Thantai88",
    description: site.description,
    images: [{ url: absoluteUrl("/images/og-slots.webp"), width: 1200, height: 630, alt: "Người mẫu casino châu Âu bên máy slot đỏ vàng của Thantai88Slots" }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: [absoluteUrl("/images/og-slots.webp")] },
  icons: { icon: "/icon.svg", apple: site.logoPath },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#160308" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <GsapEntrance />
        <SiteHeader />
        <main>{children}</main>
        <StickyCta />
        <SiteFooter />
      </body>
    </html>
  );
}
