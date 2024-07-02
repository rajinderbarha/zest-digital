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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
    },
  ],
})
