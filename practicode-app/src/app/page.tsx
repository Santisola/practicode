import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { Navbar } from "./ui/components/Navbar/Navbar";

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
    bio: string
  }
}

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);
  console.log('POSTS', posts)

  return (
    <>
      <Navbar />
      <main>
        {posts &&
        <ul>
          {posts.map((post:Post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <em>By {post.author.name} - {post._createdAt.split('T')[0]}</em>
            </li>
          ))}
        </ul>
        }
      </main>
    </>
  );
}
