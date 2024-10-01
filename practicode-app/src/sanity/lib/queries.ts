import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type=="post"]{
    _id,
    _createdAt,
    title,
    summary,
    tag,
    banner,
    slug {
      current
    },
    content,
    author->{
      name,
      bio,
      foto
    }
}`);

export const POSTS_QUERY_BY_SLUG = (slug: string) => defineQuery(`*[_type=="post" && slug.current == ${slug}]{
  _id,
  _createdAt,
  title,
  summary,
  tag,
  banner,
  slug {
    current
  },
  content,
  author->{
    name,
    bio,
    foto
  }
}`);

export const TAGS_QUERY = defineQuery(`*[
  _type == "tag"
] {
  name
}`);