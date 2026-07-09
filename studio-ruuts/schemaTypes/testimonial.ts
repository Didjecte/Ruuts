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
      type: 'text',
      description: 'A brief summary of the testimonial/post for the grid card.',
    }),
    defineField({
      name: 'mediaImage',
      title: 'Main Image (File Upload)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mediaUrl',
      title: 'Main Image / Media External URL',
      type: 'string',
      description: 'Used if you want to paste an external image link instead of uploading a file.',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery (File Uploads)',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'For Photo Posts: upload multiple images for the visual journal gallery.',
    }),
    defineField({
      name: 'galleryUrls',
      title: 'Gallery (External URLs)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'For Photo Posts: paste external image links for the gallery.',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
      description: 'For Video Posts: link to the hosted video (e.g. Vimeo, YouTube, or raw mp4).',
    }),
    defineField({
      name: 'duration',
      title: 'Video Duration',
      type: 'string',
      description: 'For Video Posts: e.g. 2:45, 12:10.',
    }),
    defineField({
      name: 'body',
      title: 'Body Content (For Articles)',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})

