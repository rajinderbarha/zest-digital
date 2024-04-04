
// DocumentA schema
import { defineType } from 'sanity';

export const GrowthCurve = defineType({
  name: 'growthCurve',
  type: 'document',
  title: "Growth Curve",
  fields: [
    { name: 'growthCurve', title: 'Growth Shared', type: 'growthshared' },
    // Other fields...
  ]
});