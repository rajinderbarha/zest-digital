

import { defineType } from 'sanity'

export const Accordion = defineType({
  title: 'Accordion',
  name: 'accordion',
  type: 'document',

  fields: [

    {
        name: 'accordiongroup',
        title: 'Accordion Group',
        type: 'object',
        fields: [
          { name: 'heading', type: 'string', title: 'Heading' },
            {
                name: "card",
                type: 'array',
                title: 'Card',
                of: [
                  {
                    type: "object",
                        fields: [
                          { name: 'question', type: 'string', title: 'Question' },
                          { name: 'answer', type: 'string', title: 'Answer' },
            
                          ],
                        },
                      ],
                    },

                    { name: 'belowbuttonName', type: 'string', title: 'Below Button Name' },
        ],
    },
  ],
})











