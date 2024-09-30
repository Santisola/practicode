import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { Navbar } from "./ui/components/Navbar/Navbar";
import PostsList from './ui/components/Posts/PostsList/PostsList';

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);
  console.log('POSTS', posts)

  return (
    <>
      <Navbar />
      <main className='container m-auto py-6'>
        <PostsList posts={posts} />
      </main>
    </>
  );
}
