import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityImage';
import classes from './styles.module.css';
import UserIcon from './Icons/UserIcon';
import Link from 'next/link';
import { PostDate } from '../../PostDate';
import { TagBadge } from '../../TagBadge';

export default async function HorizontalPostCard({post}: {post: Post}) {
    return (
        <article className={classes.postCard}>
            <div className="imageContainer relative h-60">
                <Link href={`/post/${post.slug.current}`}>
                    <Image
                        src={String(urlFor(post.banner))}
                        alt={post.title}
                        fill={true}
                        objectFit='cover'
                    />
                </Link>
            </div>
            <div className='p-4'>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className='flex items-center gap-1'>
                        <UserIcon width={16} height={16} />
                        <span className='mt-1'>{post.author.name}</span>
                    </span>
                    <PostDate date={post._createdAt} className='mt-1' />
                </div>
                <h2 className='text-2xl font-bold mt-2'>
                    <Link href={`/post/${post.slug.current}`} className='hover:text-accent transition-all'>{post.title}</Link>
                </h2>
                <p className='mt-4 text-muted-foreground'>{post.summary}</p>
                <div className='mt-9 flex gap-4'>
                    <TagBadge tagData={post.tag} />
                </div>
            </div>
        </article>
    )
}