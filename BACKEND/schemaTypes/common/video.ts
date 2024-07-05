import {defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'iframeUrl',
      title: 'Iframe URL',
      type: 'url',
    },
  ],
})
