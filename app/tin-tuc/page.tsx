import type { Metadata } from "next";
import Link from "next/link";
import { PartnerLink } from "@/components/partner-link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tin tức slot online",
  description: "Cẩm nang slot online, jackpot, ưu đãi và trải nghiệm mobile dành cho người chơi Việt Nam từ 18 tuổi.",
  alternates: { canonical: "/tin-tuc" },
};

export default function NewsPage() {
  return (
    <section className="page-section shell" data-gsap="rise">
      <span className="eyebrow">Trung tâm nội dung</span>
      <h1>Tin tức slot online</h1>
      <p>Cập nhật mẹo chọn game, jackpot, ưu đãi và trải nghiệm mobile để bạn vào chơi tự tin hơn, rõ điều kiện hơn và kiểm soát giới hạn tốt hơn.</p>
      <PartnerLink>Vào nền tảng 18+</PartnerLink>
      <div className="post-grid news-grid">
        {posts.map((post) => (
          <article className="post-card" data-gsap="rise" key={post.slug}>
            <Link href={`/tin-tuc/${post.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={post.title} src={post.image} />
            </Link>
            <div>
              <span>{post.category}</span>
              <h2><Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
              <div className="card-actions"><PartnerLink className="text-cta">Chơi ngay</PartnerLink><Link href={`/tin-tuc/${post.slug}`}>Đọc bài</Link></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
