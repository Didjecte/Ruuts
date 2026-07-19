import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['siteSettings', 'homepageContent'])

export default defineConfig({
  name: 'default',
  title: 'Ruuts Studio',

  projectId: 'vyyl6ql8',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Global Site Settings Singleton
            S.listItem()
              .title('Global Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            // Homepage Content Singleton
            S.listItem()
              .title('Homepage Content')
              .id('homepageContent')
              .child(
                S.document()
                  .schemaType('homepageContent')
                  .documentId('homepageContent')
              ),
            S.divider(),
            // All other regular document lists
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() || '')
            ).map((listItem) => {
              if (listItem.getId() === 'testimonial') {
                return listItem.child(
                  S.documentTypeList('testimonial')
                    .title(listItem.getTitle() || 'Testimonials')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
                )
              }
              if (listItem.getId() === 'experience') {
                return listItem.child(
                  S.documentTypeList('experience')
                    .title(listItem.getTitle() || 'Experiences')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                )
              }
              return listItem
            }),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})

