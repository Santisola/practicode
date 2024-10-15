import Link from "next/link"

interface Tag {
    name: string,
    slug: {
        current: string
    }
}

export default function CategoriesSidebar({tags}: {tags: Tag[]}) {
  return (
    <ul>
        {tags.map((tag: any, i: number) => (
        <li key={i} className='block text-sm font-medium hover:underline underline-offset-4 mb-2'>
            <Link href={`/posteos/${tag.slug.current}`}>{tag.name}</Link>
        </li>
        ))}
    </ul>
  )
}
