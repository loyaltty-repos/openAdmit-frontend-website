import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const postUrls = posts.data.map((post) => ({
    url: `https://openadmits.com/blog/${post.slug?.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://openadmits.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://openadmits.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postUrls,
  ];
}
