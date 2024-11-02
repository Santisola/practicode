import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";
import { PostDate } from "../../PostDate";

export default function HighlightedPost({post}: {post: Post}) {
  return (
    <article className="flex gap-4 mb-4">
        <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden relative">
            <Link href={`/post/${post.slug.current}`}>
                <Image
                    src={String(urlFor(post.banner))}
                    alt={post.title}
                    fill={true}
                    objectFit='cover'
                />
            </Link>
        </div>
        <div>
            <Link href={`/post/${post.slug.current}`}>
                <h3 className="text-sm">{post.title}</h3>
                <PostDate date={post._createdAt} className={'mt-1 text-xs'} />
            </Link>
        </div>
    </article>
  )
}
