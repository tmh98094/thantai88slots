# Audit internal link - Thantai88slots

- Site: Thantai88slots
- Mục đích: Tìm cơ hội internal link, CTA disclosure và trùng intent với main hub.
- Thời điểm tạo: 2026-07-12T23:29:50.146Z
- Trạng thái xuất bản: Cần duyệt thủ công trước khi xuất bản

## Guardrails

- Không tự động deploy.
- Không tự động commit/push.
- Không tự động xuất bản nội dung iGaming hoặc betting.
- Chỉ dùng API miễn phí; nếu thiếu key hoặc hết quota thì ghi nhận trong report thay vì dừng hỏng.

## Biến môi trường/API

- Không phát hiện biến môi trường bắt buộc bị thiếu cho lần chạy này.

## Ghi chú compliance

- Nội dung chỉ dành cho độc giả 18+ và phải nhắc người đọc tự đặt giới hạn ngân sách.
- Không dùng các claim như “chắc thắng”, “lợi nhuận đảm bảo”, “không rủi ro” hoặc lời hứa hoàn tiền không có bằng chứng.
- Không bịa giấy phép, RTP, tỷ lệ trả thưởng, khuyến mãi, tốc độ rút tiền, đánh giá người dùng hoặc trạng thái pháp lý.
- Tin tức/thống kê/lich thi đấu cần có nguồn và ngày kiểm tra; nội dung evergreen không nên đổi ngày chỉ để trông mới hơn.
- Cần duyệt thủ công trước khi xuất bản; các script này chỉ tạo report hoặc bản nháp nội bộ.

## Tổng quan link

- Tổng link tìm thấy: 22.
- Internal link: 17.
- External link: 2.
- Link affiliate/CTA phát hiện: 0.

## Mẫu link cần kiểm tra

- README.md → ./docs/AI_IMAGE_PROMPTS.md
- README.md → ./docs/IMAGE_PLACEMENT_AND_QA.md
- app/chu-de/[slug]/page.tsx → /tin-tuc
- app/chu-de/[slug]/page.tsx → /choi-co-trach-nhiem
- app/page.tsx → https://thantai88.online
- app/page.tsx → #chu-de-slot
- app/page.tsx → /tin-tuc
- app/page.tsx → /tin-tuc
- app/page.tsx → https://thantai88.com/nha-cung-cap-game
- app/tin-tuc/[slug]/page.tsx → /choi-co-trach-nhiem
- app/tin-tuc/tin-moi/page.tsx → /tin-tuc/bai-viet
- components/brand-logo.tsx → /

## Việc nên làm

- Mỗi bài slots mới nên có link về trang 18+, chơi có trách nhiệm và bài giải thích thuật ngữ liên quan.
- Không cạnh tranh intent với main hub nếu bài đó là iGaming tổng quát.
- CTA affiliate cần disclosure, rel sponsored/nofollow nếu là link ngoài.
