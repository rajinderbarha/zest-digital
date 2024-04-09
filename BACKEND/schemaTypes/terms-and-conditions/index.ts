import { defineType } from 'sanity';

export const TermsAndConditions = defineType({
  title: 'Terms And Conditions',
  name: 'termsAndConditions',
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
          to: [{ type: 'singleTermsOfService' }],
        },
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
