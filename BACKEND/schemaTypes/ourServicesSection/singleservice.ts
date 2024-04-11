import { defineType } from 'sanity'

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
              maxLength: 15
            }
          },
          {
            name: "title",          // name refers to just thelike the id of the field 
            type: "string",
            title: "Title of blog article "             //title of the field
        },
          
          {
            name: "smallDescription",          // this smallDescription and below button name will show on terms-and-condition page in a card with above title also
            type: "string",
            title: "Small Description"             //title of the field
        },
        {
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [
            {name: 'callButtonName', type: 'string', title: 'Call button name'},
            {name: 'resultsButtonName', type: 'string', title: 'Results button name'},
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
                            { name: 'image', type: 'image', title: 'Image' },
                            { name: 'imagetitle', type: 'string', title: 'Image Title' },
                        ],
                    },
                ],
            },
            {
                name: 'contentBox',
                title: 'Content Box',
                type: 'object',
                fields: [
                    { name: 'heading', type: 'string', title: 'Heading' },
                    { name: 'description', type: 'string', title: 'Description' },
                    { name: 'belowdesc', type: 'string', title: 'Below Desc' },
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
            name: "services",
              type: 'object',
              fields: [
                  { name: 'heading', type: 'string', title: 'Heading' },
                  { name: 'description_1', type: 'string', title: 'Description_1' },
                  { name: 'description_2', type: 'string', title: 'Description_2' },
                  { name: 'image', type: 'image', title: 'Image' },
              ],
          },
      ],

    },

    {
      name: 'Services_book_call',
      title: 'Book a call',
      type: 'object',
      fields: [
          { name: 'heading', type: 'string', title: 'Heading' },
          { name: 'buttonName', type: 'string', title: 'Button Name' },
          
        ],
  },


  
  {
    name: 'ourSubServices',
    title: 'Our Sub Services',
    type: 'object',
    fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        {
          name: "services",
            type: 'array',
            title: 'Services',
            of: [
                {
                    type: "object",
                    fields: [
                      { name: 'image', type: 'image', title: 'Image' },
                      { name: 'title', type: 'string', title: 'Title' },
                      { name: 'description', type: 'string', title: 'Description' },
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
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'heading', type: 'string', title: 'Heading' },
        {
            name: "card",
            type: 'array',
            title: 'Card',
            of: [
              {
                type: "object",
                    fields: [
                      { name: 'percentsge', type: 'string', title: 'Percentsge' },
                      { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description_1', type: 'string', title: 'Description_1' },
                        { name: 'description_2', type: 'string', title: 'Description_2' },
                        { name: 'buttonName', type: 'string', title: 'Button Name' },
                      ],
                    },
                  ],
                },
                { name: 'belowbuttonName', type: 'string', title: 'Below Button Name' },
    ],
},


{
  name: 'globalaccordion',
  title: 'Accordion',
  type: 'reference',
  to: [{ type: 'accordion' }]

},


{
  name: 'Services_Quotes',
  title: 'Services Quotes',
  type: 'array',


  of: [
    { 
      // name: "quote",
      title:"Quote",
        type: 'object',
        fields: [
          { name: 'description', type: 'string', title: 'Description' },
          { name: 'name', type: 'string', title: 'Name' },
        ],
    },
],

},

        {
            name: 'agencyAddress',
            title: 'Agency Address',
            type: 'reference',
            to: [{ type: 'serviceAgencyAddress' }]

        },



        {
            name: 'banner',
            title: 'Banner',
            type: 'reference',
            to: [{ type: 'climteaction' }]

        }
    ],
})
