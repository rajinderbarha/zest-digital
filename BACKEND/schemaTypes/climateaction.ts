

import {defineType} from 'sanity'

export const ClimteAction = defineType({
  title: 'Climte Action',
  name: 'climteaction',
  type: 'document',

  fields: [
   
{name: 'climate_actionImg', title: 'Climate_actionImg', type: 'image'},
{name: 'earth_img', title: 'Earth_img', type: 'image'},
{
  name: "smallDescription",           // name is just like id of the field 
  type: "string",
  title: "Small Description"
},
  ],
})











