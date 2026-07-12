import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";
import { topicHubs } from "@/lib/topic-hubs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1, changeFrequency: "daily" },
    { url: absoluteUrl("/tin-tuc"), priority: 0.9, changeFrequency: "weekly" },
    { url: absoluteUrl("/tin-tuc/tin-moi"), priority: 0.75, changeFrequency: "daily" },
    { url: absoluteUrl("/tin-tuc/bai-viet"), priority: 0.85, changeFrequency: "weekly" },
    { url: absoluteUrl("/choi-co-trach-nhiem"), priority: 0.5, changeFrequency: "monthly" },
    { url: absoluteUrl("/18-plus"), priority: 0.4, changeFrequency: "monthly" },
    { url: absoluteUrl("/lien-he"), priority: 0.35, changeFrequency: "monthly" },
    ...topicHubs.map((hub) => ({ url: absoluteUrl(`/chu-de/${hub.slug}`), priority: 0.82, changeFrequency: "monthly" as const })),
    ...posts.map((post) => ({ url: absoluteUrl(`/tin-tuc/${post.slug}`), lastModified: post.date, priority: 0.75, changeFrequency: "monthly" as const, images: [absoluteUrl(post.image)] })),
  ];
}
