interface Post {
    _id: string,
    _createdAt: string,
    title: string,
    summary: string,
    tag: {
        name: string,
        slug: {
            current: string
        }
    },
    banner: object,
    slug: {
        current: string
    },
    content: object[],
    author: {
        name: string,
        bio: string,
        foto: any
    }
}