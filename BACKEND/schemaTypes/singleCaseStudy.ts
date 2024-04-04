import { defineType } from 'sanity'

export const SingleCaseStudy = defineType({
    title: 'Single Case Study',
    name: 'single',
    type: 'document',

    fields: [
        { name: 'upperTitle', title: 'Upper Title', type: 'string' },
        { name: 'Title', title: 'title', type: 'string' },
        {
            name: 'Hero',
            title: 'hero',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'heading', type: 'string', title: 'Heading' },
                        { name: 'belowLine', type: 'string', title: 'Below Line' },
                        {
                            name: 'item', type: 'array', title: 'Item', of: [{
                                type: "object", fields: [
                                    { type: "image", name: 'icon', title: 'Icon' },
                                    { type: 'number', name: 'count', title: 'Count' },
                                    { type: 'string', name: 'description', title: 'Description' }
                                ]
                            }]
                        },
                    ],
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
                        { name: 'description', type: 'array', title: 'Description',of:[{type:'block'}] },
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
