import { defineType } from 'sanity'

export const HomePage = defineType({
    title: 'HomePage',
    name: 'homepage',
    type: 'document',

    fields: [
        
        {
            name: 'growRevenue', title: 'Grow revenues section', type: 'object', fields: [
                {name:"heading",title:"Heading", type:"string"},

                { name: 'viewSolBtnName', type: 'string', title: 'View Solutions Name' },
                { name: 'viewSolBtnLink', type: 'string', title: 'View Solutions Link' },
                { name: 'SeeOurResBtnName', type: 'string', title: 'See our results Name' },
                { name: 'SeeOurResBtnLink', type: 'string', title: 'See our results Link' },

                { name: 'image', type: 'image', title: 'Image' },
                

                { name: 'videosrc', type: 'string', title: 'Video source' },
            ]
        },


        {
            name: 'TransformResults',
            title: 'Transform Results section',
            type: 'object',
            fields: [
                { name: 'heading', type: 'string', title: 'Heading' },
                {
                    name: 'switcher', type: 'array', title: 'Switcher', of: [
                        // {
                        //     title:"Colored Text Item",
                        //     type: 'object',
                        //     fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                
                        //     ],
                        // },
                    ],
                },
                {
                    name: 'horizontalbars', type: 'array', title: 'Horizontal Bars', of: [
                        {
                            title:"Colored Text Item",
                            type: 'object',
                            fields: [
                                { name: 'numHeading', type: 'string', title: 'Heading' },
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'desc', type: 'string', title: 'Description' },
                                
                            ],
                        },
                    ],
                },


               
    {
        name: 'growthcard',
        title: 'GrowthCard',
        type:"array",
      of:[{type:'reference',to:[{type:"card"}]}]
        
      },
  
  


                {
                    name:'brandList',
                    title:"Brand List",
                    type:"array",
                    of:[{type:'reference',to:[{type:"brandList"}]}]
                },


                {
                    name: 'banner',
                    title: 'Banner',
                    type: 'reference',
                    to: [{type: 'climteaction'}],
                  },
            ]

        },







       
    ],
})
