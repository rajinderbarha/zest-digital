import {defineType} from 'sanity'

export const Schedule_a_call = defineType({
  title: 'Schedule a call',
  name: 'Schedule_a_call',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
   
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{type: 'climteaction'}],
    },
  ],
})
