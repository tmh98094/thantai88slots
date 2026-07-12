import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PartnerLink } from "@/components/partner-link";
import { getPost, posts, type SlotPost } from "@/lib/posts";
import { getTopicHub } from "@/lib/topic-hubs";

type PageProps = { params: Promise<{ slug: string }> };

function isSlotPost(value: SlotPost | undefined): value is SlotPost {
  return value !== undefined;
}

export const dynamicParams = true;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/tin-tuc/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, images: [post.image] },
  };
}

export default async function SlotPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const parentHub = getTopicHub(post.slug);
  const hubRelatedPosts = (parentHub?.relatedSlugs.map(getPost) ?? []).filter(isSlotPost).filter((item) => item.slug !== post.slug);
  const orderedRelatedPosts = [
    ...hubRelatedPosts,
    ...posts.filter((item) => item.slug !== post.slug),
  ];
  const relatedPosts = Array.from(new Map(orderedRelatedPosts.map((item) => [item.slug, item])).values()).slice(0, 2);

  return (
    <article className="article shell" data-gsap="rise">
      <span className="eyebrow">{post.category}</span>
      <h1>{post.title}</h1>
      <p className="dek">{post.description}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={post.imageAlt} className="article-image" src={post.image} />
      <aside className="article-cta" data-gsap="rise">
        <strong>Muốn vào trang chơi?</strong>
        <span>Đọc xong phần hướng dẫn, hãy kiểm tra điều kiện 18+, đặt giới hạn cá nhân và chỉ tham gia trong phạm vi giải trí.</span>
        <PartnerLink>Vào nền tảng 18+</PartnerLink>
      </aside>
      <div className="prose">
        {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <section className="article-related-links" aria-label="Đọc tiếp theo chủ đề">
        <p className="section-kicker">Đọc tiếp theo chủ đề</p>
        <h2>Giữ thông tin trong cùng một ngữ cảnh</h2>
        <div>
          {parentHub ? (
            <Link href={`/chu-de/${parentHub.slug}`}>
              <strong>{parentHub.title}</strong>
              <span>{parentHub.description}</span>
            </Link>
          ) : null}
          {relatedPosts.map((relatedPost) => (
            <Link href={`/tin-tuc/${relatedPost.slug}`} key={relatedPost.slug}>
              <strong>{relatedPost.title}</strong>
              <span>{relatedPost.description}</span>
            </Link>
          ))}
          <Link href="/choi-co-trach-nhiem">
            <strong>Nguyên tắc chơi có trách nhiệm</strong>
            <span>Đặt giới hạn tiền, thời gian và cảm xúc trước khi mở một phiên chơi.</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
