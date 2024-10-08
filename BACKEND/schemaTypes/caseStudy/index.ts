import {defineType} from 'sanity'

export const CaseStudy = defineType({
  title: 'Case Study',
  name: 'caseStudy',
  type: 'document',
  preview: {
    select: {
      title: 'hero.heading',
    },
  },
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'image', type: 'image', title: 'Image'},
        {name: 'buttonName', type: 'string', title: 'Button Name'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'},
      ],
    },

    {
      name: 'section',
      title: 'Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading'},
            {name: 'belowLine', type: 'string', title: 'Below Line'},
            {name: 'imageDesc', type: 'string', title: 'Image Desc'},
            {name: 'image', type: 'image', title: 'Image'},

            {
              name: 'collection',
              title: 'Collection',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'singleCaseStudy'}]}],
            },
          ],
        },
      ],
    },
  ],
})
