import { defineType } from 'sanity'

export const About = defineType({
    title: 'About',
    name: 'about',
    type: 'document',

    fields: [
        {
            name: 'hero', title: 'Hero', type: 'object', fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'heading', type: 'string', title: 'Heading' },
                { name: 'image', type: 'image', title: 'Image' },
            ]
        },


        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'image', type: 'image', title: 'Image' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'string', title: 'Description' },
                    ],
                },
            ],
        },

        {
            name: 'ourValue',
            title: 'Our Value',
            type: 'object',
            fields: [
                { name: 'heading', type: 'string', title: 'Heading' },
                {
                    name: 'ourValuesection', type: 'array', title: 'Our Value Section', of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'image', type: 'image', title: 'Image' },
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'description', type: 'string', title: 'Description' },
                            ],
                        },
                    ],
                },

            ]

        },
        {
            name: 'lifeSection',
            title: 'Life Section',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'string', title: 'Description' },
                { name: 'image', type: 'image', title: 'Image' },
            ],
        },
        {
            name: 'card',
            title: 'Card',
            type: 'array', of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'image', type: 'image', title: 'Image' },
                        { name: 'description', type: 'string', title: 'Description' },
                    ],
                },
            ],


        },
        {
            name: 'escape',
            title: 'Escape',
            type: 'object',
            fields: [
                { name: 'heading', type: 'string', title: 'Heading' },
                { name: 'description', type: 'string', title: 'Description' },
                { name: 'careerPagelink', type: 'string', title: 'Career Page link' },
                {
                    name: 'marquee', type: 'array', title: 'Marquee', of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'title', type: 'string', title: 'Title' },
                                { name: 'description', type: 'string', title: 'Description' },
                            ],
                        },
                    ],
                },
                
            ]
            
        },

        {
            name: 'banner',
            title: 'Banner',
            type: 'object',
            fields: [
                { name: 'image1', type: 'image', title: 'Image One' },
                { name: 'image2', type: 'image', title: 'Image Two' },
                { name: 'description', type: 'string', title: 'Description' },
            ],
        },

       
    ],
})
