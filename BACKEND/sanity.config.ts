import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { table } from '@sanity/table';
export default defineConfig({
  name: 'default',
  title: 'Zest Digital',

  projectId: 'dexthfb7',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(), 
      // Include the table plugin
      table(),
  ],

  schema: {
    types: schemaTypes,
  },
})
