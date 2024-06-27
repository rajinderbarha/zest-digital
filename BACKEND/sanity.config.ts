import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Zest Digital',

  projectId: 'dexthfb7',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(), // Add the table plugin here
  ],

  schema: {
    types: schemaTypes,
  },
})
