import type { Metadata } from "next";
import Link from "next/link";
import { PartnerLink } from "@/components/partner-link";
import { getPostsByContentType } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tin mới slot online",
  description: "Khu vực tin mới về slot online, chỉ nên xuất bản khi có nguồn rõ ràng và không tạo claim thắng thưởng.",
  alternates: { canonical: "/tin-tuc/tin-moi" },
};

export default function SlotNewsPage() {
  const posts = getPostsByContentType("news");

  return (
    <section className="page-section shell" data-gsap="rise">
      <span className="eyebrow">Tin mới</span>
      <h1>Tin slot có nguồn rõ ràng</h1>
      <p>
        Khu vực dành cho nội dung cập nhật theo sự kiện, khuyến mãi hoặc thay đổi sảnh khi có nguồn xác thực. Nếu chưa có
        dữ liệu đáng tin, website sẽ ưu tiên bài hướng dẫn evergreen.
      </p>
      <PartnerLink>Vào nền tảng 18+</PartnerLink>
      {posts.length ? (
        <div className="post-grid news-grid">
          {posts.map((post) => (
            <article className="post-card" data-gsap="rise" key={post.slug}>
              <Link href={`/tin-tuc/${post.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={post.imageAlt} src={post.image} />
              </Link>
              <div>
                <span>{post.category}</span>
                <h2>
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-panel">
          <strong>Chưa có tin news riêng</strong>
          <p>Codex Schedule sẽ tạo tin mới khi có nguồn phù hợp. Hiện tại nên đọc nhóm bài evergreen.</p>
          <Link className="btn btn-soft" href="/tin-tuc/bai-viet">
            Xem bài viết slot
          </Link>
        </div>
      )}
    </section>
  );
}
