import { defineType } from 'sanity'

export const ServicesAgencyAddress = defineType({
    title: 'Service Agency Address',
    name: 'serviceAgencyAddress',
    type: 'document',
    fields: [
        { name: 'heading_add', title: 'Heading', type: 'string' },
        { name: 'slotDescription_add', title: 'Slot Description', type: 'string' },
        { name: 'buttonName_add', title: 'Button name', type: 'string' },
        { name: 'buttonName_link', title: 'Button link', type: 'string' },
        {
            name: 'address',
            title: 'Address',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name:"contactInfo", title:"Contact information ", type:"array", of:[{
                            type:"block"
                        }]},
                        

                        
                        // { name: 'title_add', type: 'string', title: 'Title' },
                        // { name: 'streetAddress_add', type: 'string', title: 'Street Address' },
                        // { name: 'hourstitle_add', type: 'string', title: 'Hours Title' },
                        // { name: 'dayandtiming_add', type: 'string', title: 'Day and timing' },

                    ],
                },
            ],
        },
        {
            name: 'cardLoc', type: 'array', title: 'Card Location', of: [{
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
