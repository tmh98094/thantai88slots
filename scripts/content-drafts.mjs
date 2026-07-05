import { buildDraftMarkdown, makeOutputPath, parseCliArgs, printResult, writeSeoOpsFile } from "./seo-ops-lib.mjs";

const { dryRun, date } = parseCliArgs();

const markdown = buildDraftMarkdown({
  siteName: "Thantai88slots",
  topic: "RTP là gì: cách đọc thông tin mà không nhầm thành cam kết thắng",
  angle:
    "Một bài evergreen giúp người đọc hiểu RTP là số liệu lý thuyết dài hạn, không phải lời hứa thắng trong từng phiên. Nội dung cần giải thích rủi ro, quản lý ngân sách và không bịa RTP game cụ thể.",
  internalLinks: ["/18-plus", "/choi-co-trach-nhiem", "/tin-tuc"],
  generatedAt: date,
});

printResult(await writeSeoOpsFile(makeOutputPath("drafts", "slots-draft-rtp-la-gi", date), markdown, { dryRun }));
