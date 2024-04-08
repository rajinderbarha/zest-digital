import {defineType} from 'sanity'

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
    {name:'card', title:'Card', type:'array', of:[

         {name:'terms', title:'Terms', type:'object',fields:[
         
            {name:'title', title:'Title', type:'string'},
         {name:'description', title:'Description', type:'string'},
         {name:'buttonName', title:'Button Name', type:'string'},
         {name:'buttonLink', title:'Button Link', type:'string'},
        
        ]},
        
     ]},
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{type: 'climteaction'}],
    },
  ],
})


