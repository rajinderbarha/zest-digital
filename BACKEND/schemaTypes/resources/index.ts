import {defineType} from 'sanity'

export const Resources = defineType({
  title: 'Resources',
  name: 'resources',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'hovericon',
          title: 'Hover Icon',
          type: 'image',
        },
      ],
    },
    {
      name: 'tool',
      title: 'Tool',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'buttonName',
              title: 'Button Name',
              type: 'string',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
            },
            {
              name: 'uploadFile',
              type: 'file',
              title: 'File Upload',
              options: {
                storeOriginalFilename: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'brandList',
      title: 'Brand List',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'brandList'}]}],
    },
  ],
})
