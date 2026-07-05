import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerLink } from "@/components/partner-link";
import { getPost, posts } from "@/lib/posts";

type PageProps = { params: Promise<{ slug: string }> };

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

  return (
    <article className="article shell" data-gsap="rise">
      <span className="eyebrow">{post.category}</span>
      <h1>{post.title}</h1>
      <p className="dek">{post.description}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={post.title} className="article-image" src={post.image} />
      <aside className="article-cta" data-gsap="rise">
        <strong>Muốn vào trang chơi?</strong>
        <span>Đọc xong phần hướng dẫn, hãy kiểm tra điều kiện 18+, đặt giới hạn cá nhân và chỉ tham gia trong phạm vi giải trí.</span>
        <PartnerLink>Vào nền tảng 18+</PartnerLink>
      </aside>
      <div className="prose">
        {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  );
}
