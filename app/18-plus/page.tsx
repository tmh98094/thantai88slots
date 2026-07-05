import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xác nhận 18+",
  description:
    "Thantai88Slots chỉ dành cho người từ 18 tuổi trở lên, với nội dung slot online và liên kết đối tác cần được sử dụng có trách nhiệm.",
};

export default function AgePage() {
  return (
    <section className="page-section shell" data-gsap="rise">
      <span className="eyebrow">18+</span>
      <h1>Chỉ dành cho người trưởng thành.</h1>
      <p>Không sử dụng website nếu bạn chưa đủ tuổi theo quy định tại nơi cư trú. Nội dung mang tính tham khảo và có liên kết đến nền tảng đối tác.</p>
    </section>
  );
}
