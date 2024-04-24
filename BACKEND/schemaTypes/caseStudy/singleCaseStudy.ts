import { defineType } from 'sanity'

export const SingleCaseStudy = defineType({
    title: 'Single Case Study',
    name: 'singleCaseStudy',
    type: 'document',

    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'upperTitle',
              maxLength: 10
            }
          },
        { name: 'upperTitle', title: 'Upper Title', type: 'string' },
       
        { name: 'title', title: 'Title', type: 'string' },
        {
            name: 'hero',
            title: 'Hero',
            type: 'object',
            fields: [
                { name: 'heading', type: 'string', title: 'Heading' },
                { name: 'belowLine', type: 'string', title: 'Below Line' },
                { name: 'image', type: 'image', title: 'Image' },
                { name: 'imageDesc', type: 'string', title: 'Image description' },
                {
                    name: 'item', type: 'array', title: 'Item', validation: Rule => {
                        return Rule.custom((items: any) => {             
                            if (items.length > 3 ) {
                                return 'The items array must contain exactly 3 items.';
                            }
                            return true;
                        })
                    }, of: [{
                        type: "object", fields: [
                            { type: "image", name: 'icon', title: 'Icon' },
                            { type: 'string', name: 'count', title: 'Count' },
                            { name: 'heading', title: 'Heading', type: 'string' },
                            {name:'title', title:'Title', type:'string'},
                            { type: 'string', name: 'description', title: 'Description' },
                            { type: 'string', name: 'buttonname', title: 'Button Name' },
                            
                        ]
                    }]
                },
            ],
        },
        {
            name: 'card',
            title: 'Card',
            type: 'array',
            of: [
                {


                    type: 'object',
                    fields: [
                        { name: 'heading', type: 'string', title: 'Heading' },
                        { name: 'description', type: 'array', title: 'Description', of: [{ type: 'block' }] },
                        { name: 'image', type: 'image', title: 'Image' },
                    ],
                },
            ],
        },
        {
            name: 'team',
            title: 'Team',
            type: 'object',
            fields: [
                {
                    name: 'heading', title: 'Heading', type: 'string'
                },
                {
                    name: 'profile', title: 'Profile', type: 'array', of: [{
                        type: 'object',
                        fields: [
                            { name: 'image', title: 'Image', type: 'image' },
                            { name: 'name', title: 'Name', type: 'string' },
                            { name: 'description', title: 'Description', type: 'string' },
                        ]
                    }]
                },
            ],
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'reference',
            to: [{ type: 'climteaction' }]

        }
    ],
})
