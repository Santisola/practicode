import { defineQuery } from "next-sanity";

const postData = `{
    _id,
    _createdAt,
    title,
    summary,
    tag->{
      name,
      slug
    },
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
}`

export const POSTS_QUERY = defineQuery(`*[_type=="post"] ${postData}`);

export const POSTS_QUERY_BY_SLUG = defineQuery(`*[_type=="post" && slug.current == $slug] ${postData}`);

export const POSTS_QUERY_BY_TAG = defineQuery(`*[_type=="post" && tag->slug.current == $tagSlug] ${postData}`);

export const TAGS_QUERY = defineQuery(`*[
  _type == "tag"
] {
  name,
  slug
}`);