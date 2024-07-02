import {defineType} from 'sanity'

export const SingleTermsAndConditions = defineType({
  title: 'Single Terms And Conditions',
  name: 'singleTermsOfService',
  type: 'document',

  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 25,
      },
    },
    {
      name: 'title', // name refers to just thelike the id of the field
      type: 'string',
      title: 'Title of blog article ',
    },

    {
      name: 'smallDescription', // this smallDescription and below button name will show on terms-and-condition page in a card with above title also
      type: 'string',
      title: 'Small Description',
    },

    {name: 'buttonName', type: 'string', title: 'Button Name'},

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          name: 'tableChart',
          title: 'Table Chart',
          type: 'table',
        },
      ],
    },
  ],
})
