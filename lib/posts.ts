import rawPosts from "@/public/data/slots-posts.json";

export type SlotPostContentType = "news" | "article";

export type SlotPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  contentType: SlotPostContentType;
  image: string;
  imageAlt: string;
  date: string;
  tags: string[];
  body: string[];
};

export const posts = rawPosts as SlotPost[];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByContentType(contentType: SlotPostContentType) {
  return posts.filter((post) => post.contentType === contentType);
}
