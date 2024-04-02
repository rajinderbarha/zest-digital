import {defineType} from 'sanity'

export const Header = defineType({
  title: 'Header',
  name: 'header',
  type: 'document',

  fields: [
    {name: 'logo', title: 'Logo', type: 'image'},
    {
      name: 'navItem',
      title: 'Nav Item',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'buttonName', type: 'string', title: 'Button Name'},
            {name: 'buttonLink', type: 'string', title: 'Button Link'},
          ],
        },
      ],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {name: 'navName', type: 'string', title: 'Nav Name'},
        {name: 'navLink', type: 'string', title: 'Nav Link'},
      ],
    },
  ],
})
