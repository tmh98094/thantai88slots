import assert from "node:assert/strict";
import test from "node:test";

import { buildSlotsWidgets, parseMarkdownPost, validateSlotPostQuality } from "./slots-content-lib.mjs";

const sampleSentence = "RTP là khái niệm dài hạn, còn mỗi phiên chơi vẫn có rủi ro và cần giới hạn ngân sách rõ ràng.";
const sampleBody = `${Array.from({ length: 40 }, () => sampleSentence).join(" ")}\n\n${Array.from({ length: 40 }, () => sampleSentence).join(" ")}`;

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

${sampleBody}
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

test("validateSlotPostQuality rejects an evergreen article shorter than 700 words", () => {
  const post = parseMarkdownPost(
    "slot-ngan.md",
    sampleMarkdown.replace(sampleBody, "Nội dung ngắn nhưng chưa đủ chiều sâu cho một bài evergreen."),
  );
  const errors = validateSlotPostQuality(post);

  assert.ok(errors.some((error) => error.includes("at least 700 words")));
});

test("buildSlotsWidgets separates evergreen articles from news slots", () => {
  const article = parseMarkdownPost("rtp-la-gi.md", sampleMarkdown);
  const news = { ...article, slug: "tin-slot-moi", contentType: "news", title: "Tin mới về sảnh slot" };
  const widgets = buildSlotsWidgets([article, news], new Date("2026-07-06T00:00:00Z"));

  assert.equal(widgets.generatedAt, "2026-07-06T00:00:00.000Z");
  assert.ok(widgets.sections.some((section) => section.id === "featured-articles"));
  assert.ok(widgets.sections.some((section) => section.id === "latest-news"));
});
