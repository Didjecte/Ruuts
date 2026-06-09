import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Customer (B2C)', value: 'b2c'},
          {title: 'Professional (B2B)', value: 'b2b'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 1h, 1h30, 2h',
    }),
    defineField({
      name: 'price',
      title: 'Price per guest (RMB)',
      type: 'number',
    }),
    defineField({
      name: 'minValue',
      title: 'Minimum value to book (RMB)',
      type: 'number',
    }),
    defineField({
      name: 'maxGuests',
      title: 'Max guests per session',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'details',
      title: 'Session Details / Bullet points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      title: 'Image URL or Asset',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
