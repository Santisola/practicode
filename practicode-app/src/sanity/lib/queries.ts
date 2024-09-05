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
      bio
    }
}`);