
// DocumentA schema
import { defineType } from 'sanity';

export const GrowthEngine = defineType({
  name: 'growthEngine',
  type: 'document',
  title: "Growth Engine",
  fields: [
    { name: 'growthEngine', title: 'Growth Shared', type: 'growthshared' },
    // Other fields...
  ]
});