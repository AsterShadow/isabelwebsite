import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'isabel_gallery',

  projectId: '8cukj2c8',
  dataset: 'gallery',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
