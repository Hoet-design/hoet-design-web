import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const PROJECT_ID = import.meta.env.SANITY_PROJECT_ID || 'nou1ruml'
export const DATASET = import.meta.env.SANITY_DATASET || 'production'
export const BRAND = import.meta.env.SANITY_BRAND || 'brand-hoet-design'

export const LOCALES = ['nl', 'fr', 'en', 'de'] as const
export type Locale = (typeof LOCALES)[number]
export const BASE_LOCALE: Locale = 'nl'

// Build-time client (static generation). Dataset is private → token required.
export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-12-01',
  token: import.meta.env.SANITY_TOKEN,
  useCdn: false,
  perspective: 'published',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// ---- Queries (all brand-scoped to hoet-design) ----
const B = { brand: BRAND }

export const getPages = () =>
  client.fetch(`*[_type=="page" && brand._ref==$brand]{ _id, internalName, title, slug, seo, blocks }`, B)

export const getPage = (internalName: string) =>
  client.fetch(`*[_type=="page" && brand._ref==$brand && internalName==$n][0]{ _id, internalName, title, slug, seo, blocks }`, { ...B, n: internalName })

export const getReferences = () =>
  client.fetch(`*[_type=="referentie" && brand._ref==$brand]|order(order asc){ _id, internalName, title, slug, logo, description, photos, blocks, seo }`, B)

export const getFairs = () =>
  client.fetch(`*[_type=="fair" && brand._ref==$brand]|order(order asc){ _id, internalName, title, subtitle, logo, description, seo }`, B)

export const getSettings = () =>
  client.fetch(`*[_type=="siteSettings" && brand._ref==$brand][0]`, B)
