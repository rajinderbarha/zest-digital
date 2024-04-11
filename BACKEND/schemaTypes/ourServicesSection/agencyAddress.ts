import { defineType } from 'sanity'

export const ServicesAgencyAddress = defineType({
    title: 'Service Agency Address',
    name: 'serviceAgencyAddress',
    type: 'document',
    fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'slotDescription', title: 'Slot Description', type: 'string' },
        { name: 'buttonName', title: 'Button name', type: 'string' },
        {
            name: 'address',
            title: 'Address',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'streetAddress', type: 'string', title: 'Street Address' },
                        { name: 'hourstitle', type: 'string', title: 'Hours Title' },
                        { name: 'dayandtiming', type: 'string', title: 'Day and timing' },

                    ],
                },
            ],
        },
        {
            name: 'card', type: 'array', title: 'Card', of: [{
                type: 'object', fields: [
                    {
                        name: 'location',
                        title: 'Location',
                        type: 'reference',
                        to: [{ type: 'location' }]
            
                    },
                    { name: 'contactno', type: 'string', title: 'Contact no.' },
                ],
            }]


        },

    ],

})
