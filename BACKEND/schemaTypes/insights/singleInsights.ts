import {defineType} from 'sanity'

export const SingleInsights = defineType({
  title: 'Single Insights',
  name: 'singleInsights',
  type: 'document',

  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'hero.heading',
        maxLength: 40
      }
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
       
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
          ],
        },

        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'linkSection',
      title: 'Link section',
      type: 'object',
      fields: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
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
