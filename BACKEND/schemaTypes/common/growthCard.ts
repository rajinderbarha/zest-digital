


import { defineType } from 'sanity'

export const GrowthCard = defineType({
  title: 'Growth Card',
  name: 'card',
  type: 'document',

  fields: [
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'card.heading',
        },
      },

      {name: 'mainheading', title: 'Main Heading', type: 'string'},
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
    
  ],
})

















