import {defineType} from 'sanity'

export const HomePage = defineType({
  title: 'HomePage',
  name: 'homepage',
  type: 'document',

  preview: {
    select: {
      title: 'growRevenue.heading',
    },
  },
  fields: [
    {
      name: 'growRevenue',
      title: 'Grow revenues section',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},

        {name: 'viewSolBtnName', type: 'string', title: 'View Solutions Name'},
        {name: 'viewSolBtnLink', type: 'string', title: 'View Solutions Link'},
        {name: 'SeeOurResBtnName', type: 'string', title: 'See our results Name'},
        {name: 'SeeOurResBtnLink', type: 'string', title: 'See our results Link'},

        {name: 'image', type: 'image', title: 'Image'},

        {name: 'videosrc', type: 'string', title: 'Video source'},
      ],
    },

    {
      name: 'TransformResults',
      title: 'Transform Results section',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {
          name: 'switcher',
          type: 'array',
          title: 'Switcher',
          of: [{name: 'title', type: 'string', title: 'Title'}],
        },
        {
          name: 'horizontalbars',
          type: 'array',
          title: 'Horizontal Bars',
          of: [
            {
              title: 'Colored Text Item',
              type: 'object',
              fields: [
                {
                  name: 'SingleCaseStudyCard',
                  title: 'Single CaseStudy Card',
                  type: 'reference',
                  to: [{type: 'singleCaseStudy'}],
                },
              ],
            },
          ],
        },

        {
          name: 'growthcard',
          title: 'GrowthCard',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'growth'}]}],
        },
        {
          name: 'serviceSection',
          title: 'Service Section',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'image1', title: 'Image 1', type: 'image'},
            {name: 'image2', title: 'Image 2', type: 'image'},
            {name: 'image3', title: 'Image 3', type: 'image'},
            {
              name: 'services',
              title: 'services',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'servicetitle', title: 'Title', type: 'string'},
                    {
                      name: 'reference',
                      title: 'reference',
                      type: 'reference',
                      to: [{type: 'singleService'}],
                    },
                  ],
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
    },
  ],
})
