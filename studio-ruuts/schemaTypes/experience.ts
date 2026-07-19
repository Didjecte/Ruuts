import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  orderings: [
    {
      title: 'Order (Ascending)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Order (Descending)',
      name: 'orderDesc',
      by: [{field: 'order', direction: 'desc'}],
    },
  ],
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
      title: 'Slug (Address of the URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: "The unique identifier used in the URL address (e.g., 'seasonal-tea-ritual'). Click the 'Generate' button to build it automatically from the title.",
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

