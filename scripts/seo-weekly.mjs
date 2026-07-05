import {
  buildReportMarkdown,
  listMissingEnv,
  listProjectFiles,
  makeOutputPath,
  parseCliArgs,
  printResult,
  summarizeFiles,
  writeSeoOpsFile,
} from "./seo-ops-lib.mjs";

const { dryRun, date } = parseCliArgs();
const files = await listProjectFiles();
const summary = summarizeFiles(files);
const missingEnv = listMissingEnv([
  { env: "GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL", label: "Google Search Console" },
  { env: "PAGESPEED_API_KEY", label: "PageSpeed Insights" },
  { env: "CLOUDFLARE_API_TOKEN", label: "Cloudflare Analytics GraphQL" },
]);

const markdown = buildReportMarkdown({
  title: "Báo cáo SEO tuần - Thantai88slots",
  siteName: "Thantai88slots",
  purpose: "Theo dõi health SEO, content gap và ưu tiên refresh cho site slots.",
  missingEnv,
  generatedAt: date,
  sections: [
    {
      heading: "Tổng quan repo",
      lines: [
        `Tổng file nội dung/code có thể quét: ${summary.total}.`,
        `Theo phần mở rộng: ${summary.byExtension.join(", ")}.`,
        `Theo thư mục chính: ${summary.byTopFolder.join(", ")}.`,
      ],
    },
    {
      heading: "Ưu tiên tuần này",
      lines: [
        "Refresh nội dung RTP, volatility, Wild/Scatter, bonus round và giới hạn ngân sách.",
        "Không tạo claim provider/RTP/jackpot cụ thể nếu client chưa cấp bằng chứng.",
        "Tạo internal link từ bài tin tức về trang 18+, chơi có trách nhiệm và hub chủ đề liên quan.",
      ],
    },
  ],
});

printResult(await writeSeoOpsFile(makeOutputPath("reports", "slots-weekly-seo", date), markdown, { dryRun }));
