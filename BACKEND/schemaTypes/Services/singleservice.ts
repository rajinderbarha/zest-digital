import {defineType} from 'sanity'

export const SingleService = defineType({
  title: 'Single Service',
  name: 'singleService',
  type: 'document',

  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        // maxLength: 15
      },
    },
    {
      name: 'title', // name refers to just thelike the id of the field
      type: 'string',
      title: 'Title of blog article ', //title of the field
    },

    {
      name: 'smallDescription', // this smallDescription and below button name will show on terms-and-condition page in a card with above title also
      type: 'string',
      title: 'Small Description', //title of the field
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {name: 'callButtonName', type: 'string', title: 'Call button name'},
        {name: 'callButtonLink', type: 'string', title: 'Call button Link'},
        {name: 'resultsButtonName', type: 'string', title: 'Results button name'},
        {name: 'resultsButtonLink', type: 'string', title: 'Results button Link'},
      ],
    },

    {
      name: 'Services_Box',
      title: 'Services Box',
      type: 'object',
      fields: [
        {
          name: 'imageBox',
          title: 'Image Box',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'image', type: 'image', title: 'Image'},
                {name: 'imagetitle', type: 'string', title: 'Image Title'},
              ],
            },
          ],
        },
        {
          name: 'contentBox',
          title: 'Content Box',
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading'},
            {name: 'coloredText', type: 'string', title: 'Colored text'},
            {name: 'description', type: 'string', title: 'Description'},
            {name: 'belowdesc', type: 'string', title: 'Below Desc'},
          ],
        },
      ],
    },
    {
      name: 'Services_details',
      title: 'Services Details',
      type: 'array',

      of: [
        {
          name: 'services',
          type: 'object',
          fields: [
            {
              name: 'serviceheading',
              title: 'Heading',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
            },

            {name: 'image', type: 'image', title: 'Image'},
          ],
        },
      ],
    },

    {
      name: 'Services_book_call',
      title: 'Book a call',
      type: 'object',
      fields: [
        {name: 'heading_call', type: 'string', title: 'Heading Call'},
        {name: 'buttonName', type: 'string', title: 'Button Name'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'},
      ],
    },

    {
      name: 'ourSubServices',
      title: 'Our Sub Services',
      type: 'object',
      fields: [
        {name: 'heading_sub', type: 'string', title: 'Heading'},
        {
          name: 'services',
          type: 'array',
          title: 'Services',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'image', type: 'image', title: 'Image'},
                {name: 'title_sub', type: 'string', title: 'Title'},
                {name: 'desc_sub', type: 'string', title: 'Description'},
              ],
            },
          ],
        },
      ],
    },

    {
      name: 'clientResults',
      title: 'Client Results',
      type: 'object',
      fields: [
        {name: 'title_CR', type: 'string', title: 'Title'},
        {name: 'heading_CR', type: 'string', title: 'Heading'},
        {
          name: 'card',
          type: 'array',
          title: 'Card',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'description_1_CR', type: 'string', title: 'Description_1'},
                {name: 'description_2_CR', type: 'string', title: 'Description_2'},
                {name: 'buttonName_CR', type: 'string', title: 'Button Name'},

                {
                  name: 'sigleCaseStudyCard',
                  title: 'sigleCaseStudy Card',
                  type: 'reference',
                  to: [{type: 'singleCaseStudy'}],
                },
              ],
            },
          ],
        },
        {name: 'belowbuttonName_CR', type: 'string', title: 'Below Button Name'},
        {name: 'belowbuttonLink_CR', type: 'string', title: 'Below Button Link'},
      ],
    },

    {
      name: 'globalaccordion',
      title: 'Accordion',
      type: 'reference',
      to: [{type: 'faq'}],
    },

    {
      name: 'Services_Quotes',
      title: 'Services Quotes',
      type: 'array',

      of: [
        {
          // name: "quote",
          title: 'Quote',
          type: 'object',
          fields: [
            {name: 'desc_quote', type: 'string', title: 'Description'},
            {name: 'name_quote', type: 'string', title: 'Name'},
          ],
        },
      ],
    },

    {
      name: 'agencyAddress',
      title: 'Agency Address',
      type: 'reference',
      to: [{type: 'serviceAgencyAddress'}],
    },
  ],
})
