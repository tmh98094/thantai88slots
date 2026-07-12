import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { metadata as ageMetadata } from "../app/18-plus/page";
import { metadata as rootMetadata } from "../app/layout";
import { metadata as contactMetadata } from "../app/lien-he/page";
import HomePage from "../app/page";
import NewsPage from "../app/tin-tuc/page";
import * as SlotPostRoute from "../app/tin-tuc/[slug]/page";
import { SiteFooter } from "../components/site-footer";
import { StickyCta } from "../components/sticky-cta";
import { posts } from "../lib/posts";

const bannedVisitorCopy =
  /\bSEO\b|Google|CTA|người dùng|dự án|button|site hỗ trợ|chỉ đọc|để hành động|mock|placeholder|owner|internal/i;
const mojibakeMarkers = /\u00c3|\u00c4|\u00c6|\u00e1\u00bb|\u00c2/;

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
    expect(html).toContain("slots-lobby-hero");
    expect(html).toContain("/images/hero-slots-lobby-v2.webp");
    expect(html).toContain('href="/chu-de/rtp-bien-dong"');
    expect(text).toContain("Nhịp mới từ sảnh slot");
    expect(text).toContain("Nền tảng đối tác có nhiều sảnh");
    expect(text).not.toContain("Tạo độ tin cậy");
    expect(text).not.toMatch(bannedVisitorCopy);
    expect(text).not.toMatch(mojibakeMarkers);
  });

  it("orders homepage sections as lobby hero, topic hubs, then fresh content", () => {
    const html = renderToStaticMarkup(<HomePage />);
    const heroIndex = html.indexOf('class="slots-lobby-hero"');
    const freshIndex = html.indexOf('id="tin-moi"');
    const authorityIndex = html.indexOf('id="chu-de-slot"');

    expect(heroIndex).toBeGreaterThanOrEqual(0);
    expect(authorityIndex).toBeGreaterThan(heroIndex);
    expect(freshIndex).toBeGreaterThan(authorityIndex);
  });

  it("uses verified partner-platform lobby context without unsupported payout claims", () => {
    const html = renderToStaticMarkup(<HomePage />);
    const text = visibleText(html);

    expect(text).toContain("JDB");
    expect(text).toContain("CQ9");
    expect(text).toContain("HABA");
    expect(text).toContain("Pragmatic");
    expect(text).not.toMatch(/RTP\s*\d|tỷ lệ thắng|đảm bảo thắng|chắc thắng/i);
  });

  it("keeps the news hub free of internal SEO/CTA language", () => {
    const html = renderToStaticMarkup(<NewsPage />);
    const text = visibleText(html);

    expect(text).toContain("slot online");
    expect(text).not.toMatch(bannedVisitorCopy);
    expect(text).not.toMatch(mojibakeMarkers);
  });

  it("keeps dynamic article routes compatible with Cloudflare Workers", () => {
    expect(SlotPostRoute.dynamicParams).not.toBe(false);
  });

  it("keeps the footer written for visitors, not operators", () => {
    const html = renderToStaticMarkup(<SiteFooter />);
    const text = visibleText(html);

    expect(text).toContain("Thantai88Slots");
    expect(text).not.toMatch(bannedVisitorCopy);
    expect(text).not.toMatch(mojibakeMarkers);
  });

  it("keeps the sticky CTA dismissible with a visible Vietnamese restore tab", () => {
    const html = renderToStaticMarkup(<StickyCta />);

    expect(html).toContain("Thu gọn CTA");
    expect(html).toContain("Chơi ngay");
    expect(html).not.toContain("Play Now");
    expect(html).toContain("sticky-cta-tab");
    expect(html).toContain('href="/go/platform"');
  });

  it("keeps article data in readable Vietnamese", () => {
    for (const post of posts) {
      expect(`${post.title} ${post.description} ${post.body.join(" ")}`).not.toMatch(mojibakeMarkers);
    }
  });

  it("keeps key SEO descriptions within search-result friendly length", () => {
    for (const metadata of [rootMetadata, contactMetadata, ageMetadata]) {
      const description = descriptionText(metadata);

      expect(description.length).toBeGreaterThanOrEqual(80);
      expect(description.length).toBeLessThanOrEqual(180);
    }
  });
});
