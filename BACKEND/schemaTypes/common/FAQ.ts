

import { defineType } from 'sanity'

export const FAQ = defineType({
  title: 'FAQ',
  name: 'faq',
  type: 'document',

  fields: [

    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'buttonName', title: 'Button Name', type: 'string' },
    { name: 'buttonLink', title: 'Button Link', type: 'string' },
    { name: 'accordian', title: 'Accordian', type: 'array', of:[
        {type:"object",fields:[
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
        ]}
    ] },

  ],
})











