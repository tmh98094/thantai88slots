import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandLogo />
          <p>Thantai88Slots là cổng slot online tiếng Việt dành cho người chơi 18+. Chọn game, xem ưu đãi, kiểm tra giới hạn và vào trang chơi qua liên kết an toàn.</p>
        </div>
        <nav>
          <h2>Thông tin</h2>
          <Link href="/tin-tuc">Tất cả nội dung</Link>
          <Link href="/tin-tuc/tin-moi">Tin mới slot</Link>
          <Link href="/tin-tuc/bai-viet">Bài viết slot</Link>
          <Link href="/choi-co-trach-nhiem">Chơi có trách nhiệm</Link>
          <Link href="/18-plus">18+</Link>
          <Link href="/lien-he">Liên hệ</Link>
        </nav>
      </div>
      <div className="shell footer-note">© {new Date().getFullYear()} Thantai88Slots · Nội dung tham khảo, không đảm bảo kết quả.</div>
    </footer>
  );
}
