import { PortableText } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY_BY_SLUG } from "@/sanity/lib/queries";
import CodeBlock from "./Blocks/CodeBlock";
import Breadcrumbs from "../ui/components/Breadcrumbs";

interface PageParams {
  params: {
    postSlug: string
  }
}

export default async function Post({params: {postSlug}}: PageParams) {
  const post = await client.fetch(POSTS_QUERY_BY_SLUG, {slug: postSlug});

  const breadcrumbsItems = [
    {
      url: '/',
      name: 'Inicio'
    },
    {
      url: `/posteos/${post[0]?.tag?.slug.current}`,
      name: post[0]?.tag?.name
    },
    {
      url: '',
      name: post[0]?.title
    }
  ]
  
  return (
    post.length > 0 && <>
      <section className='container m-auto py-6'>
        <Breadcrumbs items={breadcrumbsItems} />
        <article>
          <h2 className="text-3xl font-bold mb-4">{post[0].title}</h2>
          <PortableText value={post[0].content} components={{
            types: {
              code: ({ value }: any) => {
                return <CodeBlock value={value} classes={'mt-4'} />
              }
            },
            block: {
              h3: ({children}) => <h3 className="text-2xl mt-4 mb-2">{children}</h3>
            }
          }} />
        </article>
      </section>
    </>
  );
}
