import assert from "node:assert/strict";
import test from "node:test";

import { buildSlotsWidgets, parseMarkdownPost, validateSlotPostQuality } from "./slots-content-lib.mjs";

const sampleMarkdown = `---
title: "RTP là gì trong slot online?"
description: "Giải thích RTP trong slot online theo cách dễ hiểu, nhấn mạnh đây là số liệu lý thuyết dài hạn chứ không phải cam kết thắng."
category: "Cẩm nang slot"
contentType: "article"
image: "/images/rtp-la-gi.webp"
imageAlt: "Bảng giải thích RTP slot online cho người chơi trưởng thành"
date: "2026-07-06"
tags:
  - "RTP"
  - "slot online"
---

RTP là một khái niệm thường gặp khi đọc thông tin slot, nhưng người chơi không nên hiểu nó như lời hứa kết quả.

Nội dung này dành cho người từ 18 tuổi trở lên và luôn cần đi kèm giới hạn ngân sách.
`;

test("parseMarkdownPost reads frontmatter and paragraph body", () => {
  const post = parseMarkdownPost("rtp-la-gi.md", sampleMarkdown);

  assert.equal(post.slug, "rtp-la-gi");
  assert.equal(post.contentType, "article");
  assert.equal(post.body.length, 2);
  assert.deepEqual(post.tags, ["RTP", "slot online"]);
});

test("validateSlotPostQuality accepts safe Vietnamese article content", () => {
  const post = parseMarkdownPost("rtp-la-gi.md", sampleMarkdown);

  assert.deepEqual(validateSlotPostQuality(post), []);
});

test("validateSlotPostQuality rejects unsupported RTP and guaranteed-profit claims", () => {
  const post = parseMarkdownPost(
    "slot-hot.md",
    sampleMarkdown.replace("không phải cam kết thắng", "cam kết lợi nhuận đảm bảo 99% RTP cho mọi phiên"),
  );
  const errors = validateSlotPostQuality(post);

  assert.ok(errors.some((error) => error.includes("unsupported claim")));
});

test("buildSlotsWidgets separates evergreen articles from news slots", () => {
  const article = parseMarkdownPost("rtp-la-gi.md", sampleMarkdown);
  const news = { ...article, slug: "tin-slot-moi", contentType: "news", title: "Tin mới về sảnh slot" };
  const widgets = buildSlotsWidgets([article, news], new Date("2026-07-06T00:00:00Z"));

  assert.equal(widgets.generatedAt, "2026-07-06T00:00:00.000Z");
  assert.ok(widgets.sections.some((section) => section.id === "featured-articles"));
  assert.ok(widgets.sections.some((section) => section.id === "latest-news"));
});
