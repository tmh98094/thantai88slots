import type { Metadata } from "next";
import Link from "next/link";
import { PartnerLink } from "@/components/partner-link";
import { getPostsByContentType } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Bài viết slot online & cẩm nang 18+",
  description: "Bài viết evergreen về slot online, jackpot, RTP, ưu đãi và nguyên tắc chơi có trách nhiệm.",
  alternates: { canonical: "/tin-tuc/bai-viet" },
};

export default function SlotArticlesPage() {
  const posts = getPostsByContentType("article");

  return (
    <section className="page-section shell" data-gsap="rise">
      <span className="eyebrow">Bài viết slot</span>
      <h1>Cẩm nang slot evergreen</h1>
      <p>
        Nội dung hướng dẫn giúp người đọc hiểu thuật ngữ, điều kiện ưu đãi, jackpot và cách đặt giới hạn trước khi truy cập
        nền tảng 18+.
      </p>
      <PartnerLink>Vào nền tảng 18+</PartnerLink>
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
              <div className="card-actions">
                <PartnerLink className="text-cta">Chơi ngay</PartnerLink>
                <Link href={`/tin-tuc/${post.slug}`}>Đọc bài</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
