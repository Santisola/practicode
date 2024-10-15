import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityImage';
import Link from 'next/link';
import { PostDate } from '../../PostDate';
import { TagBadge } from '../../TagBadge';

export default async function PostCard({post}: {post: Post}) {
  return (
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
  )
}
