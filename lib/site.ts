export const site = {
  name: "Thantai88Slots",
  domain: "thantai888.co",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thantai888.co",
  description:
    "Thantai88Slots là cổng slot online tiếng Việt thuộc Thantai88, tập trung vào jackpot, ưu đãi rõ điều kiện và trải nghiệm mobile cho người chơi 18+.",
  partnerPath: "/go/platform",
  partnerUrl: "https://www.thantai688.com?f=52",
  logoPath: "/images/logo.png",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function partnerUrl() {
  try {
    return new URL(process.env.PARTNER_URL || site.partnerUrl);
  } catch {
    return new URL(site.partnerUrl);
  }
}
