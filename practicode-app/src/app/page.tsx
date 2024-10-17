import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, TAGS_QUERY } from '@/sanity/lib/queries';
import PostsList from './ui/components/Posts/PostsList/PostsList';
import CategoriesSidebar from './ui/components/CategoriesSidebar';

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);
  const tags = await client.fetch(TAGS_QUERY);

  return (
    <>
      <section className='container m-auto py-6 px-4 flex gap-6'>
        <div className='md:flex gap-10'>
          <PostsList posts={posts} horizontalLayout={true} liClasses='mb-6' />
          
          <aside className='w-5/12 p-4 tagsList'>
            <h2 className='text-2xl font-bold mb-4'>Categorías</h2>
            <CategoriesSidebar tags={tags} />
          </aside>
        </div>
      </section>
    </>
  );
}
