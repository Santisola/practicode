import Link from "next/link"
import classes from './styles.module.css'

interface BreadcrumbsItem {
    url: string,
    name: string
}

export default function Breadcrumbs({items}: {items: BreadcrumbsItem[]}) {
  return (
    <nav className="mb-6">
        <ul className="flex items-center gap-2">
            {items.map((item, i) => (
                <>
                <Link href={item.url}>
                    <li key={i} className={`${classes.item} ${items.length - 1 == i ? `${classes.activeItem}` : ''}`}>{item.name}</li>
                </Link>
                {i < items.length - 1 &&
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
                </span>}
                </>
            ))}
        </ul>
    </nav>
  )
}