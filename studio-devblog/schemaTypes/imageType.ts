import {defineField, defineType} from 'sanity'

export const imgType = defineType({
  name: 'img',
  title: 'Img',
  type: 'document',
  fields: [
    defineField({
      name: 'img',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        accept: 'image/png'
      }
    })
  ],
})