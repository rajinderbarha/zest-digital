// schemas/customBlock.js
import { defineType } from 'sanity'

export const customBlock = defineType({
  name: 'customBlock',
  title: 'Custom Block',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
})
