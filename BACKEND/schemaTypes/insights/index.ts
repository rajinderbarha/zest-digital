import {defineType} from 'sanity'

export const Insights = defineType({
  title: 'Insights',
  name: 'insights',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'collection',
      title: 'Collection',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'singleInsights'}]}],
    },
    {
      name: 'linkSectionIcon',
      title: 'Link Section Icon',
      type: 'image',
    },

  ],
})
