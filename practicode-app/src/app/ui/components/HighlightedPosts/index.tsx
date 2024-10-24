import { client } from '@/sanity/lib/client';
import { POSTS_QUERY_HIGHLIGHT } from '@/sanity/lib/queries';
import HighlightedPost from '../Posts/HighlightedPost';


export default async function HighlightedPosts({maxPosts = 3}: {maxPosts?: number}) {
    const highlightedPosts = await client.fetch(POSTS_QUERY_HIGHLIGHT, {maxPosts: maxPosts});
    
    if (highlightedPosts) {
        return (
            <div className="p-4 mt-4 sidebarSection">
                <h2 className='text-2xl font-bold mb-4'>Destacados</h2>
                <ul>
                    {highlightedPosts.map((post: Post, index: number) => (
                        <li key={index}>
                            <HighlightedPost post={post} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return <></>;
}
