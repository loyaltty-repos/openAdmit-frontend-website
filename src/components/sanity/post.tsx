import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { POST_QUERYResult } from "../../../sanity.types";

export function Post({ post }: { post: POST_QUERYResult }) {
  const { title, mainImage, body, author, publishedAt } = post ?? {};

  return (
    <article className="max-w-7xl prose mx-auto mt-20 flex flex-col bg-background p-4 tracking-normal dark:prose-invert prose-headings:leading-tight prose-p:mb-1 prose-a:text-primary prose-ol:mt-0 prose-ul:mb-0 prose-ul:mt-0">
      {title ? <h1>{title}</h1> : null}
      {author?.name} •{" "}
      {publishedAt && format(new Date(publishedAt), "do MMMM, yyyy")}
      {mainImage?.asset?._ref ? (
        <Image
          className="mx-auto rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(600).height(400).url()}
          width={600}
          height={300}
          alt={title ?? ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
      <hr />
      <Link href="/blog">&larr; Return home</Link>
    </article>
  );
}
