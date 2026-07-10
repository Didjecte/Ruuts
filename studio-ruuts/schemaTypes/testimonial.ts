import {defineType, defineField} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
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
      title: 'Slug (Address of the URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: "The web address for this post (e.g., '/testimonials/harvesting-pre-rain-longjing'). Click the 'Generate' button to build it automatically from the title.",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Photo Post', value: 'photo'},
          {title: 'Video Post', value: 'video'},
          {title: 'Article Post', value: 'article'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description / Excerpt',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
          },
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
      ],
      description: 'A summary or intro text of the testimonial/post with full rich text formatting (bold, italic, underline, bullets).',
    }),
    defineField({
      name: 'mediaImage',
      title: 'Main Image (File Upload)',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => document?.type !== 'article',
    }),
    defineField({
      name: 'mediaUrl',
      title: 'Main Image / Media External URL',
      type: 'string',
      description: 'Used if you want to paste an external image link instead of uploading a file.',
      hidden: ({document}) => document?.type !== 'article',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery (File Uploads)',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'For Photo Posts: upload multiple images for the visual journal gallery.',
      hidden: ({document}) => document?.type !== 'photo',
    }),
    defineField({
      name: 'galleryUrls',
      title: 'Gallery (External URLs)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'For Photo Posts: paste external image links for the gallery.',
      hidden: ({document}) => document?.type !== 'photo',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
      description: 'For Video Posts: link to the hosted video (e.g. Vimeo, YouTube, or raw mp4).',
      hidden: ({document}) => document?.type !== 'video',
    }),
    defineField({
      name: 'duration',
      title: 'Video Duration',
      type: 'string',
      description: 'For Video Posts: e.g. 2:45, 12:10.',
      hidden: ({document}) => document?.type !== 'video',
    }),
    defineField({
      name: 'body',
      title: 'Body Content (For Articles)',
      type: 'array',
      hidden: ({document}) => document?.type !== 'article',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
          },
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
      ],
    }),

  ],
})

