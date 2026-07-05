import type { Metadata } from "next";

export const metadata: Metadata = { title: "Chơi có trách nhiệm", description: "Nguyên tắc quản lý ngân sách, thời gian và hành vi khi tham gia slot online 18+." };

export default function ResponsiblePage() {
  return (
    <section className="page-section shell">
      <span className="eyebrow">18+ · Giới hạn</span>
      <h1>Chơi slot để giải trí, không để gỡ thua.</h1>
      <p>Đặt ngân sách trước khi chơi, dừng khi không còn vui, không vay tiền và không theo đuổi khoản đã thua. Nếu hoạt động giải trí ảnh hưởng tài chính hoặc cảm xúc, hãy dừng lại và tìm hỗ trợ.</p>
    </section>
  );
}
