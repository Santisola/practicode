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
  console.log('POSTS', posts)

  return (
    <>
      <Navbar />
      <main className='container m-auto py-6'>
        {posts &&
        <ul>
          {posts.map((post:Post) => (
            <li key={post._id} className='mb-6'>
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
    </>
  );
}
