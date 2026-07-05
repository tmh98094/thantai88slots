import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { buildSlotsWidgets, parseMarkdownPost } from "./slots-content-lib.mjs";

const contentDirectory = path.join(process.cwd(), "content", "posts");
const outputPath = path.join(process.cwd(), "public", "data", "slots-widgets.json");
const filenames = (await readdir(contentDirectory)).filter((filename) => filename.endsWith(".md"));
const posts = await Promise.all(
  filenames.map(async (filename) => parseMarkdownPost(filename, await readFile(path.join(contentDirectory, filename), "utf8"))),
);
const widgets = buildSlotsWidgets(
  posts.sort((a, b) => b.date.localeCompare(a.date)),
  new Date(),
);

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(widgets, null, 2)}\n`, "utf8");
console.log(`Đã cập nhật ${path.relative(process.cwd(), outputPath)}`);
