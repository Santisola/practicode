import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { Navbar } from "./ui/components/Navbar/Navbar";
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityImage';

interface Post {
  _id: string,
  _createdAt: string,
  title: string,
  summary: string,
  tag: object,
  banner: object,
  slug: {
    current: string
  },
  content: object[],
  author: {
    name: string,
    bio: string,
    foto: any
  }
}

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);
  const tags = await client.fetch(POSTS_QUERY);
  console.log('TAGS', tags)

  return (
    <>
      <Navbar />
      <section className='container m-auto py-6 flex gap-6'>
        <main>
          {posts &&
          <ul>
            {posts.map((post:Post) => (
              <li key={post._id} className='mb-6'>
                <div className='relative h-[200px]'>
                  <Image
                    src={String(urlFor(post.banner))}
                    alt="Foto del posteo"
                    fill={true}
                    objectFit='cover'
                  />
                </div>
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
              </li>
            ))}
          </ul>
          }
        </main>
        <aside className='min-h-80'>
          <ul>
            {tags.map((tag:any, i:number) => <li key={i}>aaaa</li>)}
          </ul>
        </aside>
      </section>
    </>
  );
}
