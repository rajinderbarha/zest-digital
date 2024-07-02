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
        maxLength: 40,
      },
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
        {
          name: 'grow_down',
          title: 'Grow down image',
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
        {type: 'image'},
        {type: 'video'}, // we created a object for this video type in common folder
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
      ],
    },
  
  ],

  preview: {
    // here we are displaying the title for a page from a specific field
    select: {
      title: 'hero.heading',
    },
    // component: SingleInsightsPreview,
  },
})
