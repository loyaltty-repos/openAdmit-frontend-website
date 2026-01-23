import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { QueryParams } from "next-sanity";
import { Post } from "@/components/sanity/post";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<QueryParams>;
}): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, await params);

  if (!post)
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };

  return {
    title: post.title,
    keywords: post.categories?.filter((category) => category !== null),
    openGraph: {
      type: "website",
      url: "https://openadmits.com",
      title: post.title ?? undefined,
      images: post.mainImage?.asset?._ref && [
        {
          url: urlFor(post.mainImage.asset._ref).width(1200).height(630).url(),
        },
      ],
    },
  };
}

export const revalidate = 7200;

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}
