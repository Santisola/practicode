import HorizontalPostCard from "../HorizontalPostCard";
import PostCard from "../PostCard";

export default async function PostsList({
    posts,
    horizontalLayout,
    ulClasses,
    liClasses
}: {posts: Post[], horizontalLayout: boolean, ulClasses?: string, liClasses?: string}) {
    return (
        posts &&
        <ul className={ulClasses || ''}>
            {posts.map((post:Post) => (
            <li key={post._id} className={liClasses || ''}>
                {horizontalLayout ? 
                <HorizontalPostCard post={post} />
                :
                <PostCard post={post} />}
            </li>
            ))}
        </ul>
        
    )
}