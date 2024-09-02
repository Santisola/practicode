import { defineField, defineType } from "sanity";

export const tagType = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        defineField({
            title: 'Nombre',
            name: 'name',
            type: 'string',
            description: 'Nombre del tag',
            validation: rule => rule.required()
        }),
        defineField({
            title: 'URL',
            name: 'slug',
            type: 'slug',
            description: 'URL de la página del tag',
            options: {
                source: 'name',
                slugify: input => 'tag-' + input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        })
    ]
})