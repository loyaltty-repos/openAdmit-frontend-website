import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { POSTS_QUERYResult } from "../../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 px-4 sm:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-6xl lg:text-5xl">
            Blog Posts
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map(
            (post) =>
              post.slug && (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="flex flex-col overflow-clip rounded-xl border border-border"
                >
                  <div className="relative aspect-[16/9] w-full">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage?.asset?._ref ?? "")
                          .width(600)
                          .height(400)
                          .url()}
                        alt={post.title ?? "Blog post image"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className="flex flex-grow flex-col px-6 py-8">
                    <div className="flex-grow">
                      <h3 className="mb-3 line-clamp-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                        {post.title}
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <p className="mb-4 text-sm text-muted-foreground">
                        {post.author?.name} •{" "}
                        {post.publishedAt &&
                          format(new Date(post.publishedAt), "do MMMM, yyyy")}
                      </p>
                      <p className="flex items-center hover:underline">
                        Read more
                        <ArrowRight className="ml-2 size-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
