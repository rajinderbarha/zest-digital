import { defineType } from 'sanity'

export const GrowthShared = defineType({
    title: 'Growth Shared',
    name: 'growthshared',
    type: 'object',

    fields: [
        { name: 'heroSection', title: 'Hero Section', type: 'object', fields:[
            {name:'upperTitle', title:'Upper Title', type:'string'},
            {name:'heading', title:'Heading', type:'string'},
            {name:'button', title:'Button', type:'object',fields:[
                {name:'buttonName', title:'Button Name', type:'string'},
                {name:'buttonLink', title:'Button Link', type:'string'}
            ]},
        ]},
        { name: 'growthSection', title: 'Growth Section', type: 'object', fields:[
            {name:'headingUpper', title:'Heading Upper', type:'string'},
            {name:'titleUpper', title:'Title Upper', type:'string'},

            
            {name:'growthContent', title:'Growth Content', type:'array',of:[
                
                { name: 'price', title: 'Price', type: 'object', hidden: ({ document }) => document._type !== 'growthEngine', fields:[
                    {name:'priceOutline', title:'Price Outline', type:'string',  hidden: ({ document }) => document._type !== 'growthEngine', // Hide if the document type is 'growthTracker'
                },
                ]},
                
                
                
                {name:'growth', title:'Growth', type:'object',fields:[
                    {name:'title', title:'Title', type:'string'},
                    {name:'description', title:'Description', type:'string'},
                   
                    

                {
                    name: 'buttonName',
                    title: 'Button Name',
                    type: 'string',
                    hidden: ({ document }) => document._type === 'growthTracker' // Hide if the document type is 'growthTracker'
                },
                {
                    name: 'buttonLink',
                    title: 'Button Link',
                    type: 'string',
                    hidden: ({ document }) => document._type === 'growthTracker' // Hide if the document type is 'growthTracker'
                }

                // {name:'buttonName', title:'Button Name', type:'string'},
                // {name:'buttonLink', title:'Button Link', type:'string'}
                ]},

               
            ]},
            {name:'headingBelow', title:'Heading Below', type:'string'},
            {name:'titleBelow', title:'Title Below', type:'string'},
            {name:'image', title:'Image', type:'image'},

        ]},
        { name: 'solution', title: 'Solution', type: 'object', fields:[
            {name:'heading', title:'Heading', type:'string'},
            {name:'card', title:'Card', type:'array',of:[

                {name:'growth', title:'Growth', type:'object',fields:[
                    {name:'title', title:'Title', type:'string'},
                {name:'description', title:'Description', type:'string'},
                {name:'buttonName', title:'Button Name', type:'string'},
                {name:'buttonLink', title:'Button Link', type:'string'}
                ]},
               
            ]},
         
            {name:'image', title:'Image', type:'image'},

        ]},
        {
            name: 'banner',
            title: 'Banner',
            type: 'reference',
            to: [{ type: 'climteaction' }]

        }
    ],
})
