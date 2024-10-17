import PostsList from "@/app/ui/components/Posts/PostsList/PostsList";
import { client } from "@/sanity/lib/client"
import { POSTS_QUERY_BY_TAG } from "@/sanity/lib/queries"
import classes from '../styles.module.css'
import Breadcrumbs from "@/app/ui/components/Breadcrumbs";

interface TagsPageParams {
    params: {
        tag: string
    }
}

export default async function Categoria({params: {tag}}: TagsPageParams) {
    const posts = await client.fetch(POSTS_QUERY_BY_TAG, {tagSlug: tag});
    
    const breadcrumbsItems = [{
        url: '/',
        name: 'Inicio'
    },{
        url: `/posteos/${tag}`,
        name: posts[0]?.tag?.name
    },]
    
    return (
        <section className="container m-auto py-9 px-4">
            <Breadcrumbs items={breadcrumbsItems} />
            <PostsList
                posts={posts}
                horizontalLayout={false}
                ulClasses={`grid md:grid-cols-4 gap-x-14 gap-y-16 ${classes.gridPostsContainer}`}
            />
        </section>
    )
}