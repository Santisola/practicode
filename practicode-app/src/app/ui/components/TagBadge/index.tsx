import Link from 'next/link'
import classes from './styles.module.css'

interface TagData {
    name: string,
    slug: {
        current: string
    }
}

export const TagBadge = ({
    tagData: {
        name,
        slug
    }
}: {tagData: TagData}) => {
    return (
        <Link href={`/categorias/${slug.current}`}>
            <span className={`${classes.badge} text-sm py-1 px-3 rounded-full`}>{name}</span>
        </Link>
    )
}
