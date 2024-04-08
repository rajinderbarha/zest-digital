import { defineType } from 'sanity';

export const LocationObj = defineType({
  title: 'Location',
  name: 'location',
  type: 'document',

  fields: [
    {
      name: 'latitude',
      title: 'Latitude',
      type: 'number', // Latitude will be stored as a number
    },
    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number', // Longitude will be stored as a number
    },
  ],
});
