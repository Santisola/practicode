import Post from "../Post/Post";

export default async function PostsList({posts}: {posts: Post[]}) {
    return (
        posts &&
        <ul>
            {posts.map((post:Post) => (
            <li key={post._id} className='mb-6'>
                <Post post={post} />
            </li>
            ))}
        </ul>
        
    )
}