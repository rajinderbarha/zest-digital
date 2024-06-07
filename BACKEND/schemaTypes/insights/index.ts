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
      type: 'image'
    },

    {
      name: 'linkSection',
      title: 'Link section',
      type: 'object',
      fields: [
        // {
        //   name: 'icon',
        //   title: 'Icon',
        //   type: 'image',
        // },
        {
          name: 'linkName',
          title: 'Link Name',
          type: 'string',
        },
        {
          name: 'linkUrl',
          title: 'Link Url',
          type: 'string',
        },
      ],
    },


    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{type: 'climteaction'}],
    },
  ],
})
