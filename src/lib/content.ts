import { toHTML } from '@portabletext/to-html'
import { urlFor, BASE_LOCALE, PROJECT_ID, DATASET, type Locale } from './sanity'

// File (video) URL from a Sanity file asset ref ("file-<id>-<ext>").
export const fileUrl = (file: any): string | null => {
  const ref = file?.asset?._ref
  if (!ref) return null
  const parts = ref.split('-')
  return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${parts[1]}.${parts[2]}`
}

// Localised short text / long text, with NL fallback.
export const t = (field: any, locale: Locale): string =>
  (field?.[locale] ?? field?.[BASE_LOCALE] ?? '') as string

// Localised Portable Text array.
const ptArray = (field: any, locale: Locale): any[] => field?.[locale] ?? field?.[BASE_LOCALE] ?? []

// Render localised Portable Text (localeBlock) to HTML.
export const pt = (field: any, locale: Locale): string => {
  const blocks = ptArray(field, locale)
  if (!blocks?.length) return ''
  return toHTML(blocks, {
    components: {
      types: {
        divider: () => '<hr class="content-divider" />',
      },
      marks: {
        link: ({ children, value }: any) =>
          `<a href="${value?.href ?? '#'}" target="_blank" rel="noopener">${children}</a>`,
      },
    },
  })
}

// Image URL from an imageWithAlt / image field (respects crop + hotspot).
export const imgUrl = (image: any, width?: number, height?: number): string | null => {
  if (!image?.asset?._ref && !image?.asset?._id) return null
  let b = urlFor(image).auto('format')
  if (width) b = b.width(width)
  if (height) b = b.height(height)
  return b.url()
}

export const imgAlt = (image: any, locale: Locale, fallback = ''): string =>
  t(image?.alt, locale) || fallback

// Localised slug (NL fallback).
export const slugOf = (doc: any, locale: Locale): string =>
  doc?.slug?.[locale]?.current ?? doc?.slug?.[BASE_LOCALE]?.current ?? ''

// Localised page URL (/{locale}/{slug}).
export const pageUrl = (doc: any, locale: Locale): string => {
  const s = slugOf(doc, locale)
  return s ? `/${locale}/${s}` : `/${locale}`
}
