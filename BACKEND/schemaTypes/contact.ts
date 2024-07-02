import {defineType} from 'sanity'

export const Contact = defineType({
  title: 'Contact',
  name: 'contact',
  type: 'document',
  fields: [
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            // {name: 'socialImage', type: 'image', title: 'Social Image'},
            {name: 'socialLink', type: 'string', title: 'Social Link'},
          ],
        },
      ],
    },
    {
      name: 'card',
      type: 'array',
      title: 'Card',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'location',
              title: 'Location',
              type: 'reference',
              to: [{type: 'location'}],
            },
            {
              name: 'contactInfo',
              title: 'Contact information ',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },

            {name: 'rightDescriptionList', type: 'string', title: 'Card Right Description List'},
          ],
        },
      ],
    },
  ],
})
