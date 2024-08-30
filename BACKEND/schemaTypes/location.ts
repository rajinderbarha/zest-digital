import { defineType } from 'sanity';

export const LocationObj = defineType({
  title: 'Location',
  name: 'location',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'City Name',
      type: 'string',
    },
    {
      name: 'latitude',
      title: 'Latitude',
      type: 'number', 
    },

    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number', 
    },
  ],
});
