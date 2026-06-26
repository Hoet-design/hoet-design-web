import type { Locale } from './sanity'

// Translated UI/chrome strings (the bits not coming from Sanity content).
const STRINGS: Record<string, Record<Locale, string>> = {
  referenties: { nl: 'Referenties', en: 'References', fr: 'Références', de: 'Referenzen' },
  beurzen: { nl: 'Beurzen', en: 'Fairs', fr: 'Salons', de: 'Messen' },
  leesMeer: { nl: 'Lees meer', en: 'Read more', fr: 'Lire la suite', de: 'Mehr lesen' },
  terug: { nl: 'Terug', en: 'Back', fr: 'Retour', de: 'Zurück' },
  terugOverzicht: { nl: 'Terug naar overzicht', en: 'Back to overview', fr: "Retour à l'aperçu", de: 'Zurück zur Übersicht' },
  geenBeurzen: { nl: 'Er zijn momenteel geen beurzen gepland.', en: 'There are currently no fairs scheduled.', fr: "Aucun salon n'est actuellement prévu.", de: 'Derzeit sind keine Messen geplant.' },
}

export const ui = (key: string, locale: Locale): string =>
  STRINGS[key]?.[locale] ?? STRINGS[key]?.nl ?? key
