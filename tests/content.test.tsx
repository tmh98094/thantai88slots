import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { metadata as ageMetadata } from "../app/18-plus/page";
import { metadata as rootMetadata } from "../app/layout";
import { metadata as contactMetadata } from "../app/lien-he/page";
import HomePage from "../app/page";
import NewsPage from "../app/tin-tuc/page";
import { SiteFooter } from "../components/site-footer";
import { StickyCta } from "../components/sticky-cta";

const bannedVisitorCopy = /\bSEO\b|Google|CTA|người dùng|dự án|button|site hỗ trợ|chỉ đọc|để hành động|mock|placeholder|owner|internal/i;

function visibleText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
}

function descriptionText(metadata: { description?: unknown }) {
  return String(metadata.description ?? "");
}

describe("visitor-facing content", () => {
  it("keeps the homepage focused on player value and the Thantai88 network", () => {
    const html = renderToStaticMarkup(<HomePage />);
    const text = visibleText(html);

    expect(html).toContain("https://thantai88.online");
    expect(html).toContain("Thantai88Slots");
    expect(html).toContain('href="/go/platform"');
    expect(text).toContain("thuộc hệ sinh thái");
    expect(text).toContain("Vì sao Thantai88Slots nổi bật");
    expect(text).not.toMatch(bannedVisitorCopy);
  });

  it("keeps the news hub free of internal SEO/CTA language", () => {
    const html = renderToStaticMarkup(<NewsPage />);
    const text = visibleText(html);

    expect(text).toContain("slot online");
    expect(text).not.toMatch(bannedVisitorCopy);
  });

  it("keeps the footer written for visitors, not operators", () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    const text = visibleText(html);

    expect(text).toContain("Thantai88Slots");
    expect(text).not.toMatch(bannedVisitorCopy);
  });

  it("keeps the sticky CTA dismissible with a visible Play Now restore tab", () => {
    const html = renderToStaticMarkup(<StickyCta />);

    expect(html).toContain("Thu gọn CTA");
    expect(html).toContain("Play Now");
    expect(html).toContain("sticky-cta-tab");
    expect(html).toContain('href="/go/platform"');
  });

  it("keeps key SEO descriptions within search-result friendly length", () => {
    for (const metadata of [rootMetadata, contactMetadata, ageMetadata]) {
      const description = descriptionText(metadata);

      expect(description.length).toBeGreaterThanOrEqual(80);
      expect(description.length).toBeLessThanOrEqual(180);
    }
  });
});
