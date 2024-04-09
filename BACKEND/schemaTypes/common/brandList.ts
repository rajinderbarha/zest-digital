import {defineType} from 'sanity'

export const BrandList = defineType({
  title: 'Brand List',
  name: 'brandList',
  type: 'document',

  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
  ],
})
