import { Posts } from "@/components/sanity/posts";
import { getPosts } from "@/lib/actions";

export const revalidate = 7200;

export default async function Page() {
  const { data: posts } = await getPosts();

  return <Posts posts={posts} />;
}
