import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseMarkdownPost, validateSlotPostQuality } from "./slots-content-lib.mjs";

const contentDirectory = path.join(process.cwd(), "content", "posts");
const filenames = (await readdir(contentDirectory)).filter((filename) => filename.endsWith(".md"));
const posts = await Promise.all(
  filenames.map(async (filename) => parseMarkdownPost(filename, await readFile(path.join(contentDirectory, filename), "utf8"))),
);

const results = posts.map((post) => ({ slug: post.slug, errors: validateSlotPostQuality(post) }));
const failed = results.filter((result) => result.errors.length);

console.log("# Báo cáo kiểm tra nội dung slot tự động\n");
console.log(`- Tổng số bài: ${posts.length}`);
console.log(`- Đạt: ${posts.length - failed.length}`);
console.log(`- Cần sửa: ${failed.length}\n`);
for (const result of results) {
  console.log(`## ${result.slug}\n`);
  if (result.errors.length) {
    for (const error of result.errors) console.log(`- ${error}`);
  } else {
    console.log("- Đạt kiểm tra tự động.");
  }
}

if (failed.length) {
  process.exitCode = 1;
}
