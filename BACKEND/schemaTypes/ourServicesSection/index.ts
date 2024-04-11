import { defineType } from 'sanity';

export const OurServicesSection = defineType({
  title: 'Our Services Section',
  name: 'OurServicesSection',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'card',
      title: 'Card',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'singleService' }],
        },
      ],
    },

    {
        name: 'images',
        title: 'Images',
        type: 'object',
        fields: [
            { name: 'vertical_bar', type: 'image', title: 'Vertical Bar' },
            { name: 'Code_icon', type: 'image', title: 'Code Icon' },
            { name: 'target_icon', type: 'image', title: 'Target Icon' },
        ],
    },
   
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{ type: 'climteaction' }],
    },
  ],
});
