import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: 'author',
    title: 'Autor',
    type: 'document',
    fields: [
        defineField({
            title: 'Nombre',
            name: 'name',
            type: 'string',
            description: 'Nombre del autor',
            validation: rule => rule.required().min(3)
        }),
        defineField({
            title: 'Biografia',
            name: 'bio',
            type: 'text',
            description: 'Resumen sobre el autor',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'foto',
            title: 'Foto',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: rule => rule.assetRequired()
        }),
    ]
})