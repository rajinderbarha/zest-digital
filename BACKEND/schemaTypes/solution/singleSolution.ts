import {defineType} from 'sanity'

export const SingleSolution = defineType({
  title: 'SingleSolution',
  name: 'growth',
  type: 'document',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'heading',
      },
    },

    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'Image', title: 'Image', type: 'image'},
    {name: 'buttonName', title: 'Button Name', type: 'string'},
    {name: 'buttonLink', title: 'Button Link', type: 'string'},

    {name: 'Solheading', title: 'Soluton Heading', type: 'string'},
    {
      name: 'card',
      title: 'Card',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'description', title: 'Description', type: 'string'},
        {name: 'buttonName', title: 'Button Name', type: 'string'},
        {name: 'image', title: 'Image', type: 'image'},
      ],
    },

    {
      name: 'growthSection',
      title: 'Growth Section',
      type: 'object',
      fields: [
        {name: 'upperHeading', title: 'Upper Heading', type: 'string'},
        {name: 'upperSmallLine', title: 'Upper Small Line', type: 'string'},
        {
          name: 'growthContent',
          title: 'Growth Content',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'heading', title: 'Heading', type: 'string'},
                {name: 'description', title: 'Description', type: 'string'},
                {name: 'belowLine', title: 'Below Line', type: 'string'},
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
              ],
            },
          ],
        },
        {name: 'belowHeading', title: 'Below Heading', type: 'string'},
        {name: 'belowSmallLine', title: 'Below Small Line', type: 'string'},
        {name: 'image', title: 'Image', type: 'image'},
      ],
    },
    {
      name: 'globalaccordion',
      title: 'Accordion',
      type: 'reference',
      to: [{type: 'faq'}],
    },
  ],
})
