import { buildReportMarkdown, makeOutputPath, parseCliArgs, printResult, writeSeoOpsFile } from "./seo-ops-lib.mjs";

const { dryRun, date } = parseCliArgs();
const topics = [
  "Nổ hũ là gì và người mới nên hiểu rủi ro thế nào",
  "RTP là gì: cách đọc thông tin mà không nhầm thành cam kết thắng",
  "Volatility là gì trong trò chơi slot",
  "Wild, Scatter và Bonus Round khác nhau thế nào",
  "Cách đọc điều khoản khuyến mãi slot trước khi tham gia",
  "Checklist đặt giới hạn ngân sách khi chơi slot",
];

const markdown = buildReportMarkdown({
  title: "Brief nội dung slots evergreen",
  siteName: "Thantai88slots",
  purpose: "Gợi ý brief tiếng Việt cho nội dung slot evergreen, không phụ thuộc API catalog trả phí.",
  generatedAt: date,
  sections: [
    {
      heading: "Chủ đề ưu tiên",
      lines: topics.map((topic) => `${topic} — tập trung giáo dục, rủi ro và CTA mềm.`),
    },
    {
      heading: "Nguồn dữ liệu",
      lines: [
        "Không dùng public game/comics API để giả làm dữ liệu slot thật.",
        "Chỉ nêu RTP/provider/jackpot cụ thể nếu client cung cấp operator brief hoặc nguồn chính thức.",
        "Ưu tiên content gap từ GSC, PageSpeed và audit nội bộ.",
      ],
    },
  ],
});

printResult(await writeSeoOpsFile(makeOutputPath("reports", "slots-content-briefs", date), markdown, { dryRun }));
