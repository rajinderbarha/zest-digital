import {defineType} from 'sanity'

export const Careers = defineType({
  title: 'Careers',
  name: 'Careers',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    // {name:'card', title:'Card', type:'array', of:[

         {name:'card', title:'Card', type:'object',fields:[
         
            {name:'image', title:'Image', type:'image'},
            {name:'title', title:'Title', type:'string'},
         {name:'description', title:'Description', type:'string'},
        
        
        ]},
        
    //  ]},
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{type: 'climteaction'}],
    },
  ],
})


