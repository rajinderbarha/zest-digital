import {defineType} from 'sanity'

export const Solution = defineType({
  title: 'Solution',
  name: 'solution',
  type: 'document',

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
      name: 'card',
      title: 'Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading'},
            {name: 'description', type: 'string', title: 'Description'},
            {name: 'image', type: 'image', title: 'Image'},
            {name: 'buttonName', type: 'string', title: 'Button Name'},
            {name: 'buttonLink', type: 'string', title: 'Button Link'},
          ],
        },
      ],
    },
    {
      name: 'brandList',
      type: 'array',
      title: 'Brand List',
      of: [
        {
          name: 'icon',
          type: 'image',
          title: 'Icon',
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
