

import { defineType } from 'sanity'

export const FAQ = defineType({
  title: 'FAQ',
  name: 'faq',
  type: 'document',

  fields: [

    {
        name: 'accordiongroup',
        title: 'Accordion Group',
        type: 'object',
        fields: [
          { name: 'heading_acc', type: 'string', title: 'Heading' },
            {
                name: "card_acc",
                type: 'array',
                title: 'Card',
                of: [
                  {
                    type: "object",
                        fields: [
                          { name: 'question', type: 'string', title: 'Question' },
                          {
                            name: 'content',
                            title: 'Content',
                            type: 'array',
                            of: [
                              {type: 'block'},
                            ],
                          },
            
                          ],
                        },
                      ],
                    },

                    { name: 'belowbtnName_acc', type: 'string', title: 'Below Button Name' },
                    { name: 'belowbtnLink_acc', title: 'Button Link', type: 'string' },

        ],
    },
  ],
})











