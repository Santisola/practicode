import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            title: 'Título',
            name: 'title',
            type: 'string',
            description: 'Título atrapante del posteo',
            validation: rule => rule.required().min(5)
        }),
        defineField({
            title: 'URL',
            name: 'slug',
            type: 'slug',
            description: 'URL del posteo',
            options: {
                source: 'title',
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
        defineField({
            title: 'Resumen',
            name: 'summary',
            type: 'text',
            description: 'Resumen atractivo del posteo para mostrar en las cards',
            validation: rule => rule.required().min(15)
        }),
        defineField({
            title: 'Es destacado?',
            name: 'highlight',
            type: 'boolean',
            description: 'Destaque para posteos, sirve para carruseles de destacados, filtros, etc'
        }),
        defineField({
            name: 'banner',
            title: 'Foto',
            type: 'image',
            description: 'Banner relacionado al post, se mostrara en en el listado de posts y en el articulo en cuestión',
            validation: rule => rule.assetRequired()
        }),
        defineField({
            title: 'Tag',
            name: 'tag',
            type: 'reference',
            to: [{type: 'tag'}],
            description: 'Tag del posteo',
        }),
        defineField({
            title: 'Autor',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}],
            description: 'Autor del posteo',
            validation: rule => rule.required()
        }),
        defineField({
            title: 'Contenido',
            name: 'content',
            type: 'array',
            of: [
                {type: 'block'},
                defineArrayMember({
                    type: 'code',
                }),
                defineArrayMember({
                    type: 'image',
                    fields: [
                        {
                            type: 'string',
                            name: 'alt',
                            title: 'Alt',
                            description: 'The alt text of the image',
                        },

                    ],
                }),
            ],
            validation: rule => rule.required()
        })
    ]
})