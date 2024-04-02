import {defineType} from 'sanity'

export const Footer = defineType({
  title: 'Footer',
  name: 'footer',
  type: 'document',

  fields: [
    {name: 'climate_actionImg', title: 'Climate_actionImg', type: 'image'},
    {name: 'earth_img', title: 'Earth_img', type: 'image'},
    {
      name: "smallDescription",           // name is just like id of the field 
      type: "string",
      title: "Small Description"
  },
    {name: 'logo', title: 'Logo', type: 'image'},
    {
      name: 'footerItem',
      title: 'Footer Item',
      type: 'array',
      of: [ 
        {
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading'},
            {
              name: 'list',
              type: 'array',
              title: 'List',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'name', title: 'Name', type: 'string'},
                    {name: 'link', title: 'Link', type: 'string'},
                    {name: 'icon', title: 'Icon', type: 'image'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{name: 'brandImage', type: 'image', title: 'Brand Image'}],
        },
      ],
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'socialImage', type: 'image', title: 'Social Image'},
            {name: 'socialLink', type: 'string', title: 'Social Link'},
          ],
        },
      ],
    },
    {name: 'copyRightText', type: 'string', title: 'Copy Right Text'},
  ],
})
