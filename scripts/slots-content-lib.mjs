const vietnameseSignalPattern = /[ăâđêôơưáàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/i;
const unsupportedClaimPatterns = [
  /chắc\s*thắng/i,
  /cam\s*kết\s*(lợi\s*nhuận|hoàn\s*tiền)/i,
  /lợi\s*nhuận\s*đảm\s*bảo/i,
  /không\s*rủi\s*ro/i,
  /\b\d{2,3}%\s*RTP\b/i,
  /guaranteed\s*(win|profit|income)/i,
];

function unquote(value) {
  return value.trim().replace(/^["']|["']$/g, "");
}

function parseFrontmatterBlock(block) {
  const result = {};
  const lines = block.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;

    const [, key, rawValue] = pair;
    if (rawValue.trim()) {
      result[key] = unquote(rawValue);
      continue;
    }

    const items = [];
    while (lines[index + 1]?.match(/^\s+-\s+/)) {
      index += 1;
      items.push(unquote(lines[index].replace(/^\s+-\s+/, "")));
    }
    result[key] = items;
  }
  return result;
}

export function parseMarkdownPost(filename, source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${filename} is missing frontmatter`);
  }

  const data = parseFrontmatterBlock(match[1]);
  const content = match[2].trim();
  const slug = filename.replace(/\.md$/, "");
  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    contentType: data.contentType ?? "article",
    image: data.image,
    imageAlt: data.imageAlt ?? data.title,
    date: data.date,
    tags: Array.isArray(data.tags) ? data.tags : [],
    body: content.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean),
  };
}

export function validateSlotPostQuality(post) {
  const errors = [];
  const searchable = [
    post.title,
    post.description,
    post.category,
    post.imageAlt,
    ...(post.tags ?? []),
    ...(post.body ?? []),
  ]
    .filter(Boolean)
    .join(" ");

  for (const field of ["slug", "title", "description", "category", "image", "date"]) {
    if (!post[field]) errors.push(`${field} is required`);
  }

  if (post.slug && !/^[a-z0-9-]+$/.test(post.slug)) {
    errors.push("slug must be lowercase kebab-case");
  }

  if (post.image && !post.image.startsWith("/images/")) {
    errors.push("image must be stored under /images/");
  }

  if (!vietnameseSignalPattern.test(searchable)) {
    errors.push("content must be Vietnamese");
  }

  if (unsupportedClaimPatterns.some((pattern) => pattern.test(searchable))) {
    errors.push("content contains an unsupported claim");
  }

  return errors;
}

export function buildSlotsWidgets(posts, date = new Date()) {
  const articles = posts.filter((post) => post.contentType !== "news").slice(0, 4);
  const news = posts.filter((post) => post.contentType === "news").slice(0, 4);

  return {
    generatedAt: date.toISOString(),
    sourceStatus: "local-content",
    sections: [
      {
        id: "featured-articles",
        title: "Cẩm nang nổi bật",
        description: "Bài evergreen nên ưu tiên cho SEO và internal link.",
        items: articles.map((post) => ({ label: post.category, value: post.title, href: `/tin-tuc/${post.slug}` })),
      },
      {
        id: "latest-news",
        title: "Tin tức slot",
        description: "Chỉ dùng khi có nguồn rõ ràng; mặc định ưu tiên bài hướng dẫn evergreen.",
        items: news.length
          ? news.map((post) => ({ label: post.category, value: post.title, href: `/tin-tuc/${post.slug}` }))
          : [{ label: "Trạng thái", value: "Chưa có tin news riêng", href: "/tin-tuc" }],
      },
      {
        id: "responsible-play",
        title: "Checklist 18+",
        description: "Nhắc người đọc kiểm tra ngân sách, điều khoản và thời gian chơi.",
        items: [
          { label: "Ngân sách", value: "Đặt giới hạn trước khi chơi", href: "/choi-co-trach-nhiem" },
          { label: "Điều khoản", value: "Đọc vòng cược và thời hạn", href: "/tin-tuc" },
          { label: "Kỳ vọng", value: "Không xem jackpot/RTP như cam kết thắng", href: "/18-plus" },
        ],
      },
    ],
  };
}
