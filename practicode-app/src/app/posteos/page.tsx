import PostsList from "@/app/ui/components/Posts/PostsList/PostsList";
import { client } from "@/sanity/lib/client"
import { POSTS_QUERY } from "@/sanity/lib/queries"
import classes from './styles.module.css'
import Breadcrumbs from "../ui/components/Breadcrumbs";

export default async function Categoria() {
    const posts = await client.fetch(POSTS_QUERY);
   
    const breadcrumbsItems = [{
        url: '/',
        name: 'Inicio'
    },{
        url: '',
        name: 'Todas las publicaciones'
    }]
    
    return (
        <section className="container m-auto py-9">
            <Breadcrumbs items={breadcrumbsItems} />
            <PostsList
                posts={posts}
                horizontalLayout={false}
                ulClasses={`grid grid-cols-4 gap-x-14 gap-y-16 ${classes.gridPostsContainer}`}
            />
        </section>
    )
}