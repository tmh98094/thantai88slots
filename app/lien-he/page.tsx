import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ Thantai88Slots để gửi góp ý nội dung, yêu cầu hợp tác hoặc câu hỏi về kênh slot online 18+ thuộc hệ sinh thái Thantai88.",
};

export default function ContactPage() {
  return (
    <section className="page-section shell">
      <span className="eyebrow">Liên hệ</span>
      <h1>Gửi yêu cầu cho Thantai88Slots.</h1>
      <p>Email demo: hello@thantai88slots.example. Có thể thay bằng email thật của bạn khi triển khai domain.</p>
    </section>
  );
}
