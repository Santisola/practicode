import { defineQuery } from "next-sanity";

const postData = `{
    _id,
    _createdAt,
    title,
    summary,
    highlight,
    tag->{
      name,
      slug
    },
    banner,
    slug {
      current
    },
    content[]{
      ...,
      _type == "image" => {
        ...,
        "src": asset->url,
        alt,
      }
    },
    author->{
      name,
      bio,
      foto
    }
}`

export const POSTS_QUERY = defineQuery(`*[_type=="post"] | order(_createdAt desc) ${postData}`);

export const POSTS_QUERY_BY_SLUG = defineQuery(`*[_type=="post" && slug.current == $slug] ${postData}`);

export const POSTS_QUERY_HIGHLIGHT = defineQuery(`*[_type=="post" && highlight][0...$maxPosts] ${postData}`);

export const POSTS_QUERY_BY_TAG = defineQuery(`*[_type=="post" && tag->slug.current == $tagSlug] | order(_createdAt desc) ${postData}`);

export const TAGS_QUERY = defineQuery(`*[
  _type == "tag"
] {
  name,
  slug
}`);