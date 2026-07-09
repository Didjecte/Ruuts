import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort experiences (e.g. 1, 2, 3...)',
    }),
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
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
      name: 'bullets',
      title: 'Bullets (B2C)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bullet points to display on the B2C card',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights (B2B)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Highlight points to display on the B2B card',
    }),
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Or Image External URL',
      type: 'string',
      description: 'If you want to use an external image link instead of uploading a file',
    }),
    defineField({
      name: 'details',
      title: 'Session Details / Extra Bullet points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

