import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { getTopicHub, topicHubs } from "@/lib/topic-hubs";

describe("slot topic hubs", () => {
  it("defines the six durable slot knowledge hubs", () => {
    expect(topicHubs.map((hub) => hub.slug)).toEqual([
      "rtp-bien-dong",
      "tinh-nang-slot",
      "nha-cung-cap-slot",
      "slot-di-dong",
      "uu-dai-slot",
      "choi-co-trach-nhiem-slot",
    ]);
  });

  it("maps every legacy evergreen article to a parent hub", () => {
    expect(getTopicHub("rtp-va-bien-dong-slot")?.slug).toBe("rtp-bien-dong");
    expect(getTopicHub("tu-dong-quay-slot-an-toan")?.slug).toBe("choi-co-trach-nhiem-slot");
  });

  it("gives each article a parent-hub path and related-reading surface", () => {
    const articleRoute = readFileSync("app/tin-tuc/[slug]/page.tsx", "utf8");

    expect(articleRoute).toContain("getTopicHub(post.slug)");
    expect(articleRoute).toContain("article-related-links");
  });
});
