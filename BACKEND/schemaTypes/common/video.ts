import { defineType } from "sanity";

// Define the new video type
export const video = defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
      {
        name: 'iframeUrl',
        title: 'Iframe URL',
        type:"url",
      },
    ],
  });