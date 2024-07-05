import {defineType} from 'sanity'

export const Solution = defineType({
  title: 'Solution',
  name: 'solution',
  type: 'document',

  preview: {
    select: {
      title: 'hero.upperTitle',
    },
  },
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {name: 'upperTitle', type: 'string', title: 'Upper Title'},
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'image', type: 'image', title: 'Image'},
      ],
    },
    {
      name: 'transform',
      title: 'Transform',
      type: 'object',
      fields: [
        {
          name: 'upperTitle',
          type: 'object',
          title: 'Upper Title',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {
              name: 'switcher',
              type: 'array',
              title: 'Switcher',
              of: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                },
              ],
            },
          ],
        },
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'belowLine', type: 'string', title: 'Below Line'},
      ],
    },

    {
      name: 'brandList',
      title: 'Brand List',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'brandList'}]}],
    },
    {
      name: 'growth',
      title: 'Growth',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'growth'}]}],
    },
  ],
})
