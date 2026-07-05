import fs from "node:fs";
import path from "node:path";

export type SlotPostContentType = "news" | "article";

export type SlotPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  contentType: SlotPostContentType;
  image: string;
  imageAlt: string;
  date: string;
  tags: string[];
  body: string[];
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function unquote(value: string) {
  return value.trim().replace(/^["']|["']$/g, "");
}

function parseFrontmatter(block: string) {
  const data: Record<string, string | string[]> = {};
  const lines = block.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;

    const [, key, rawValue] = pair;
    if (rawValue.trim()) {
      data[key] = unquote(rawValue);
      continue;
    }

    const values: string[] = [];
    while (lines[index + 1]?.match(/^\s+-\s+/)) {
      index += 1;
      values.push(unquote(lines[index].replace(/^\s+-\s+/, "")));
    }
    data[key] = values;
  }
  return data;
}

function readString(data: Record<string, string | string[]>, key: string, filename: string) {
  const value = data[key];
  if (typeof value === "string" && value.trim()) return value.trim();
  throw new Error(`${filename} thiếu frontmatter: ${key}`);
}

function readPost(filename: string): SlotPost {
  const source = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${filename} thiếu frontmatter`);

  const data = parseFrontmatter(match[1]);
  const content = match[2].trim();
  const slug = filename.replace(/\.md$/, "");
  const contentType = readString(data, "contentType", filename);
  if (contentType !== "news" && contentType !== "article") {
    throw new Error(`${filename} có contentType không hợp lệ`);
  }

  return {
    slug,
    title: readString(data, "title", filename),
    description: readString(data, "description", filename),
    category: readString(data, "category", filename),
    contentType,
    image: readString(data, "image", filename),
    imageAlt: readString(data, "imageAlt", filename),
    date: readString(data, "date", filename),
    tags: Array.isArray(data.tags) ? data.tags : [],
    body: content.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean),
  };
}

export const posts: SlotPost[] = fs
  .readdirSync(postsDirectory)
  .filter((filename) => filename.endsWith(".md"))
  .map(readPost)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByContentType(contentType: SlotPostContentType) {
  return posts.filter((post) => post.contentType === contentType);
}
