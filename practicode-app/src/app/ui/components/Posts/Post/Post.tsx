import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityImage';

export default async function Post({post}: {post: Post}) {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <em>
            <Image
                src={String(urlFor(post.author.foto).width(48))}
                alt={post.author.name}
                width={48}
                height={48}
            />
            By {post.author.name} - {post._createdAt.split('T')[0]}</em>
        </article>
    )
}