
// DocumentA schema
import { defineType } from 'sanity';

export const GrowthTracker = defineType({
  name: 'growthTracker',
  type: 'document',
  title: "Growth Tracker",
  fields: [

    { name: 'growthTracker', title: 'Growth Shared', type: 'growthshared' },
    {
      name: 'signupform', title: 'Signup Form', type: 'object', fields: [
        { name: 'signupheading', title: 'Signup Heading', type: 'string' },
        { name: 'signupdescription', title: 'Signup Description', type: 'string' },
        { name: 'firstnameLabel', title: 'Firstname Label', type: 'string' },
        { name: 'lastnameLabel', title: 'Lastname Label ', type: 'string' },
        { name: 'emailLabel', title: 'E-mail Label ', type: 'string' },

        { name: 'buttonName', title: 'Button Name ', type: 'string' },
        { name: 'buttonLink', title: 'Button Link ', type: 'string' },
        { name: 'privacyDescription', title: 'Privacy Description ', type: 'string' },

      ]
    },

  ]
});

