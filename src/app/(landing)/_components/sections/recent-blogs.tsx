import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { RECENT_POSTS_QUERYResult } from "../../../../../sanity.types";

function formatDate(dateString?: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function RecentBlogsSection({
  recentPosts,
}: {
  recentPosts: RECENT_POSTS_QUERYResult;
}) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#181D27]">
            Recent Blogs
          </h2>
          <Link
            href="/blog"
            className="text-[#0056AD] font-medium hover:underline"
          >
            View all posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {recentPosts?.slice(0, 3).map((post) => (
            <Link
              key={post?._id}
              href={`/blog/${post?.slug?.current ?? ""}`}
              className="group block"
            >
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-white">
                {post?.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(800).url()}
                    alt={post?.title ?? "Post image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : null}
              </div>
              <div className="mt-3">
                <p className="text-[#0056AD] text-sm">
                  {post?.author?.name}
                  {post?.publishedAt
                    ? ` • ${formatDate(post.publishedAt)}`
                    : ""}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-[#181D27] group-hover:text-[#0B5CC4]">
                  {post?.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
