import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityImage';
import classes from './styles.module.css';
import UserIcon from './Icons/UserIcon';
import CalendarIcon from './Icons/CalendarIcon';
import Link from 'next/link';

export default async function Post({post}: {post: Post}) {
    return (
        <article className={classes.postCard}>
            <div className="imageContainer relative h-60">
                <Image
                    src={String(urlFor(post.banner))}
                    alt={post.title}
                    fill={true}
                    objectFit='cover'
                />
            </div>
            <div className='p-4'>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className='flex items-center gap-1'>
                        <UserIcon width={16} height={16} />
                        <span className='mt-1'>{post.author.name}</span>
                    </span>
                    <span className='flex items-center gap-1'>
                        <CalendarIcon width={16} height={16} />
                        <span className='mt-1'>{post._createdAt.split('T')[0]}</span>
                    </span>
                </div>
                <h2 className='text-2xl font-bold mt-2'>
                    <Link href={post.slug.current}>{post.title}</Link>
                </h2>
                <p className='mt-4 text-muted-foreground'>{post.summary}</p>
            </div>
        </article>
    )
}