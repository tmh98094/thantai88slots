import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PartnerLink } from "@/components/partner-link";
import { getPost } from "@/lib/posts";
import { getTopicHubBySlug, topicHubs } from "@/lib/topic-hubs";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return topicHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getTopicHubBySlug(slug);
  if (!hub) return {};
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: `/chu-de/${hub.slug}` },
  };
}

export default async function TopicHubPage({ params }: PageProps) {
  const { slug } = await params;
  const hub = getTopicHubBySlug(slug);
  if (!hub) notFound();

  const relatedPosts = hub.relatedSlugs.map(getPost).filter((post) => post !== undefined);

  return (
    <section className="topic-hub">
      <div className="shell topic-hub-intro">
        <p className="section-kicker">{hub.eyebrow}</p>
        <h1>{hub.title}</h1>
        <p className="dek">{hub.intro}</p>
        <div className="topic-hub-actions">
          <Link className="btn btn-soft" href="/tin-tuc">
            Xem tất cả bài viết
          </Link>
          <PartnerLink>Vào nền tảng 18+</PartnerLink>
        </div>
      </div>

      <div className="shell topic-hub-layout">
        <section>
          <div className="section-head section-head-left">
            <div>
              <p className="section-kicker">Bài viết liên quan</p>
              <h2>Đọc theo một chủ đề thống nhất</h2>
            </div>
          </div>
          <div className="post-grid topic-post-grid">
            {relatedPosts.map((post) => (
              <article className="post-card" key={post.slug}>
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
                  <Link className="text-cta" href={`/tin-tuc/${post.slug}`}>
                    Đọc hướng dẫn
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="topic-checklist">
          <p className="section-kicker">Trước khi tiếp tục</p>
          <h2>Ba điểm cần giữ rõ</h2>
          <ul>
            {hub.checkpoints.map((checkpoint) => (
              <li key={checkpoint}>{checkpoint}</li>
            ))}
          </ul>
          <Link href="/choi-co-trach-nhiem">Đọc nguyên tắc chơi có trách nhiệm</Link>
        </aside>
      </div>
    </section>
  );
}
