import { PostDate } from "@/app/ui/components/PostDate";
import { TagBadge } from "@/app/ui/components/TagBadge";
import { client } from "@/sanity/lib/client"
import { POSTS_QUERY_BY_TAG } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";

interface TagsPageParams {
    params: {
        tag: string
    }
}

export default async function Categoria({params: {tag}}: TagsPageParams) {
    const posts = await client.fetch(POSTS_QUERY_BY_TAG, {tagSlug: tag});
   
    return (
        <section className="container m-auto py-9">
            <ul className="grid grid-cols-4 gap-x-14 gap-y-16">
                {posts.map((post: Post, index:number) => (
                    <li key={index}>
                        <article>
                            <div className="relative h-60 rounded-lg overflow-hidden mb-6">
                                <Link href={`/${post.slug.current}`}>
                                    <Image
                                        src={String(urlFor(post.banner))}
                                        alt={post.title}
                                        fill={true}
                                        objectFit='cover'
                                    />
                                </Link>
                            </div>
                            <div className="flex gap-6">
                                <PostDate date={post._createdAt} className={'mt-1 text-sm'} />
                                <TagBadge tagData={post.tag} />
                            </div>
                            <h3 className="text-2xl font-bold my-5">
                                <Link href={`/${post.slug.current}`}>{post.title}</Link>
                            </h3>
                            <p className="mt-4 text-muted-foreground text-clamped">{post.summary}</p>
                            <div className="mt-6 flex gap-4 items-center">
                                <Image
                                    src={String(urlFor(post.author.foto))}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                    objectFit='cover'
                                    className="rounded-full"
                                />
                                <strong>{post.author.name}</strong>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}