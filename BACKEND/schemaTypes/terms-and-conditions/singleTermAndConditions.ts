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
      name: 'title', 
      type: 'string',
      title: 'Title of blog article ',
    },

    {
      name: 'smallDescription', 
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
