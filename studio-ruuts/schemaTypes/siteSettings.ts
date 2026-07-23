import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  groups: [
    { name: 'seo', title: 'Global SEO & Socials', default: true },
    { name: 'organization', title: 'Organization & GEO Facts' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Global Site Settings',
      readOnly: true,
      hidden: true,
      group: 'seo',
    }),
    
    // SEO & Socials
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default Meta Title',
      type: 'string',
      description: 'Site-wide default meta title (e.g., "Ruuts - Premium Group Experiences & Tea Rituals")',
      group: 'seo',
    }),
    defineField({
      name: 'titlePrefix',
      title: 'Title Prefix',
      type: 'string',
      description: 'Prefix prepended when specific pages override the title (e.g., "Ruuts - ")',
      group: 'seo',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      description: 'Site-wide default description for search engines and AI previews.',
      group: 'seo',
    }),
    defineField({
      name: 'defaultSeoImage',
      title: 'Default OpenGraph Social Banner',
      type: 'image',
      description: 'Image displayed when sharing links on WeChat, WhatsApp, LinkedIn, or Twitter.',
      options: { hotspot: true },
      group: 'seo',
    }),
    defineField({
      name: 'errorPageMessage',
      title: '404 Error Page Message',
      type: 'text',
      rows: 3,
      description: 'Custom message displayed on the 404 Page Not Found error page.',
      group: 'seo',
    }),

    // Organization & GEO Facts
    defineField({
      name: 'siteName',
      title: 'Organization / Brand Name',
      type: 'string',
      description: 'Official brand name used in AI GEO structured data (e.g., "RUUTS")',
      group: 'organization',
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
      description: 'Used in AI Search fact cards (e.g., "Ophélie Hu")',
      group: 'organization',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Global Contact Email',
      type: 'string',
      group: 'organization',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Global Contact Phone',
      type: 'string',
      group: 'organization',
    }),
    defineField({
      name: 'location',
      title: 'Primary Location',
      type: 'string',
      description: 'City/Region used in structured JSON-LD data (e.g., "Shanghai, China")',
      group: 'organization',
    }),
  ],
})
