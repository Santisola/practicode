import { PortableText } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY_BY_SLUG } from "@/sanity/lib/queries";
import CodeBlock from "./Blocks/CodeBlock";
import Breadcrumbs from "../../ui/components/Breadcrumbs";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanityImage";
import ImageBlock from "./Blocks/ImageBlock";

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
      <section className='container m-auto py-6 px-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        <article className="prose prose-invert max-w-full">
          <h2 className="text-3xl font-bold mb-4">{post[0].title}</h2>
          <div className="mb-12 h-[400px] w-full relative">
            <Image
              src={String(urlFor(post[0].banner))}
              alt={post[0].title}
              fill={true}
              objectFit="cover"
              className="rounded-md overflow-hidden"
            />
          </div>
          <PortableText value={post[0].content} components={{
            types: {
              code: ({ value }: any) => {
                return <CodeBlock value={value} classes={'mt-4'} />
              },

              image: ImageBlock
            },
            block: {
              h3: ({children}) => <h3 className="text-2xl mt-4 mb-2">{children}</h3>
            },
            marks: {
              link: ({value, children}) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                return (
                  <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''}>
                    {children}
                  </a>
                )
              },
            }
          }} />
        </article>
      </section>
    </>
  );
}
