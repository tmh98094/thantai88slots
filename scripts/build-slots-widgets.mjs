import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { buildSlotsWidgets, parseMarkdownPost } from "./slots-content-lib.mjs";

const contentDirectory = path.join(process.cwd(), "content", "posts");
const dataDirectory = path.join(process.cwd(), "public", "data");
const postsOutputPath = path.join(dataDirectory, "slots-posts.json");
const widgetsOutputPath = path.join(dataDirectory, "slots-widgets.json");

const filenames = (await readdir(contentDirectory)).filter((filename) => filename.endsWith(".md"));
const posts = await Promise.all(
  filenames.map(async (filename) => parseMarkdownPost(filename, await readFile(path.join(contentDirectory, filename), "utf8"))),
);
const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
const widgets = buildSlotsWidgets(sortedPosts, new Date());

await mkdir(dataDirectory, { recursive: true });
await writeFile(postsOutputPath, `${JSON.stringify(sortedPosts, null, 2)}\n`, "utf8");
await writeFile(widgetsOutputPath, `${JSON.stringify(widgets, null, 2)}\n`, "utf8");
console.log(`Đã cập nhật ${path.relative(process.cwd(), postsOutputPath)} và ${path.relative(process.cwd(), widgetsOutputPath)}`);
