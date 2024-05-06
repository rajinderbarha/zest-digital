import {defineType} from 'sanity'

export const BrandList = defineType({
  title: 'Brand List',
  name: 'brandList',
  type: 'document',

  fields: [
    {
      name: 'imagetitle',
      type: 'string',
      title: 'Image Title',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
  ],
})
