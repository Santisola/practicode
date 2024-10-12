import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, TAGS_QUERY } from '@/sanity/lib/queries';
import PostsList from './ui/components/Posts/PostsList/PostsList';
import Link from 'next/link';

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);
  const tags = await client.fetch(TAGS_QUERY);

  return (
    <>
      <section className='container m-auto py-6 flex gap-6'>
        <div className='flex gap-10'>
          <PostsList posts={posts} />
          <aside className='w-5/12 p-4 tagsList'>
            <h2 className='text-2xl font-bold mb-4'>Categorías</h2>
            <ul>
              {tags.map((tag: any, i: number) => (
                <li key={i} className='block text-sm font-medium hover:underline underline-offset-4 mb-2'>
                  <Link href={`/categorias/${tag.slug.current}`}>{tag.name}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
