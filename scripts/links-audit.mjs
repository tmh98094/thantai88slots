import {
  buildReportMarkdown,
  extractProjectLinks,
  listProjectFiles,
  makeOutputPath,
  parseCliArgs,
  printResult,
  summarizeLinks,
  writeSeoOpsFile,
} from "./seo-ops-lib.mjs";

const { dryRun, date } = parseCliArgs();
const files = await listProjectFiles();
const links = await extractProjectLinks(process.cwd(), files);
const summary = summarizeLinks(links);

const markdown = buildReportMarkdown({
  title: "Audit internal link - Thantai88slots",
  siteName: "Thantai88slots",
  purpose: "Tìm cơ hội internal link, CTA disclosure và trùng intent với main hub.",
  generatedAt: date,
  sections: [
    {
      heading: "Tổng quan link",
      lines: [
        `Tổng link tìm thấy: ${summary.total}.`,
        `Internal link: ${summary.internal}.`,
        `External link: ${summary.external}.`,
        `Link affiliate/CTA phát hiện: ${summary.affiliate}.`,
      ],
    },
    {
      heading: "Mẫu link cần kiểm tra",
      lines: summary.samples.length ? summary.samples : ["Không tìm thấy link trong lần quét này."],
    },
    {
      heading: "Việc nên làm",
      lines: [
        "Mỗi bài slots mới nên có link về trang 18+, chơi có trách nhiệm và bài giải thích thuật ngữ liên quan.",
        "Không cạnh tranh intent với main hub nếu bài đó là iGaming tổng quát.",
        "CTA affiliate cần disclosure, rel sponsored/nofollow nếu là link ngoài.",
      ],
    },
  ],
});

printResult(await writeSeoOpsFile(makeOutputPath("reports", "slots-links-audit", date), markdown, { dryRun }));
