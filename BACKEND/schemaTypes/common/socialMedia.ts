import {defineType} from 'sanity'

export const SocialMedia = defineType({
  title: 'SocialMedia',
  name: 'socialmedia',
  type: 'document',

  fields: [
    {
      name: 'lightsocial',
      title: 'LightSocial',
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
    {
      name: 'darksocial',
      title: 'DarkSocial',
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
  ],
})
