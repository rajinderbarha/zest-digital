import { defineType } from 'sanity'

export const DigitalTermsOfService = defineType({
    title: 'Digital Terms Of Service',
    name: 'digitalTermsOfService',
    type: 'document',
    
    fields: [
        { name: 'content', title: 'Content', type: 'array', of:[{type:'block'}] },
        {
            name: 'banner',
            title: 'Banner',
            type: 'reference',
            to: [{ type: 'climteaction' }]

        }
    ],
})
