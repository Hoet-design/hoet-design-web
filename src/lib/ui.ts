import type { Locale } from './sanity'

// Translated UI/chrome strings (the bits not coming from Sanity content).
const STRINGS: Record<string, Record<Locale, string>> = {
  referenties: { nl: 'Referenties', en: 'References', fr: 'Références', de: 'Referenzen' },
  beurzen: { nl: 'Beurzen', en: 'Fairs', fr: 'Salons', de: 'Messen' },
  leesMeer: { nl: 'Lees meer', en: 'Read more', fr: 'Lire la suite', de: 'Mehr lesen' },
  terug: { nl: 'Terug', en: 'Back', fr: 'Retour', de: 'Zurück' },
  terugOverzicht: { nl: 'Terug naar overzicht', en: 'Back to overview', fr: "Retour à l'aperçu", de: 'Zurück zur Übersicht' },
  geenBeurzen: { nl: 'Er zijn momenteel geen beurzen gepland.', en: 'There are currently no fairs scheduled.', fr: "Aucun salon n'est actuellement prévu.", de: 'Derzeit sind keine Messen geplant.' },
  beursdeelnames: { nl: 'Internationale beursdeelnames', en: 'International fair participations', fr: 'Participations aux salons internationaux', de: 'Internationale Messebeteiligungen' },
  referentiesDesc: {
    nl: 'Referenties van ontwerpbureau Hoet: exclusieve brillencollecties ontworpen voor o.a. Theo, Morà, Seiko Xchanger, Hoya-Yuniku en Miga.',
    en: 'References of Hoet Design Studio: exclusive eyewear collections designed for Theo, Morà, Seiko Xchanger, Hoya-Yuniku, Miga and more.',
    fr: 'Références du bureau de design Hoet : collections de lunettes exclusives conçues pour Theo, Morà, Seiko Xchanger, Hoya-Yuniku, Miga et plus.',
    de: 'Referenzen des Design-Studios Hoet: exklusive Brillenkollektionen für Theo, Morà, Seiko Xchanger, Hoya-Yuniku, Miga und mehr.',
  },
  beurzenDesc: {
    nl: 'Internationale beursdeelnames van ontwerpbureau Hoet — ontmoet ons op de optiekbeurzen.',
    en: 'International fair participations of Hoet Design Studio — meet us at the optical fairs.',
    fr: 'Participations aux salons internationaux du bureau de design Hoet — rencontrez-nous aux salons de l’optique.',
    de: 'Internationale Messebeteiligungen des Design-Studios Hoet — treffen Sie uns auf den Optikmessen.',
  },
  cookieTitle: { nl: 'Wij gebruiken cookies', en: 'We use cookies', fr: 'Nous utilisons des cookies', de: 'Wir verwenden Cookies' },
  // De tekst beschrijft wat er GEBEURT en niet wat er zou kunnen gebeuren. Er stond dat we
  // gepersonaliseerde inhoud en advertenties tonen; dat doen we niet, en toestemming vragen
  // voor iets wat je niet doet maakt de rest van de zin ook ongeloofwaardig.
  cookieText: {
    nl: 'Wij gebruiken cookies om ons websiteverkeer te analyseren: hoeveel bezoekers er zijn, welke pagina\'s ze lezen en waar ze vandaan komen. Geen advertenties, geen profielen, en pas nadat u aanvaardt.',
    en: 'We use cookies to analyse our website traffic: how many visitors there are, which pages they read and where they come from. No advertising, no profiling, and only after you accept.',
    fr: "Nous utilisons des cookies pour analyser le trafic de notre site : combien de visiteurs, quelles pages ils lisent et d'où ils viennent. Pas de publicité, pas de profilage, et uniquement après votre accord.",
    de: 'Wir verwenden Cookies, um unseren Website-Verkehr zu analysieren: wie viele Besucher es gibt, welche Seiten sie lesen und woher sie kommen. Keine Werbung, keine Profile, und erst nachdem Sie zustimmen.',
  },
  cookieStateYes: {
    nl: 'U aanvaardde de statistieken.',
    en: 'You accepted analytics.',
    fr: 'Vous avez accepté les statistiques.',
    de: 'Sie haben die Statistiken akzeptiert.',
  },
  cookieStateNo: {
    nl: 'U weigerde de statistieken.',
    en: 'You declined analytics.',
    fr: 'Vous avez refusé les statistiques.',
    de: 'Sie haben die Statistiken abgelehnt.',
  },
  cookieAccept: { nl: 'Ik ga akkoord', en: 'I agree', fr: "J'accepte", de: 'Ich stimme zu' },
  cookieDecline: { nl: 'Ik weiger', en: 'I decline', fr: 'Je refuse', de: 'Ich lehne ab' },
  cookiePrefs: { nl: 'Wijzig mijn voorkeuren', en: 'Manage preferences', fr: 'Gérer mes préférences', de: 'Einstellungen ändern' },
  contactTitle: { nl: 'Contacteer ons', en: 'Contact us', fr: 'Contactez-nous', de: 'Kontaktieren Sie uns' },
  offerteBtn: { nl: 'Vrijblijvende offerte ontvangen', en: 'Request a free quote', fr: 'Recevoir un devis sans engagement', de: 'Unverbindliches Angebot erhalten' },
  contactIntro: {
    nl: 'Hebt u vragen voor ontwerpbureau Hoet te Brugge, België? Neem dan contact op via e-mail op info@hoet.be of telefonisch op +32 (0)50 33 43 02.',
    en: 'Do you have questions for Hoet design studio in Bruges, Belgium? Please contact us per email info@hoet.be or by phone +32 (0)50 33 43 02.',
    fr: 'Avez-vous des questions pour le bureau de design Hoet à Bruges, Belgique ? Contactez-nous par courriel info@hoet.be ou par téléphone +32 (0)50 33 43 02.',
    de: 'Haben Sie Fragen an das Design-Studio Hoet in Brügge, Belgien? Kontaktieren Sie uns per E-Mail info@hoet.be oder telefonisch +32 (0)50 33 43 02.',
  },
  fName: { nl: 'Naam', en: 'Name', fr: 'Nom', de: 'Name' },
  fEmail: { nl: 'E-mail', en: 'Email', fr: 'Courriel', de: 'E-Mail' },
  fPhone: { nl: 'Telefoon', en: 'Telephone', fr: 'Téléphone', de: 'Telefon' },
  fMessage: { nl: 'Bericht', en: 'Message', fr: 'Message', de: 'Nachricht' },
  fSubmit: { nl: 'Verzenden', en: 'Send', fr: 'Envoyer', de: 'Senden' },
  fGdpr: {
    nl: 'Ik geef de toestemming om mijn gegevens te bewaren en verwerken.',
    en: 'I consent to my data being stored and processed.',
    fr: "J'autorise la conservation et le traitement de mes données.",
    de: 'Ich stimme der Speicherung und Verarbeitung meiner Daten zu.',
  },
  fThanks: {
    nl: 'Hartelijk dank om contact met ons te nemen. Wij geven zo spoedig mogelijk feedback.',
    en: 'Thank you for contacting us. We will get back to you as soon as possible.',
    fr: 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.',
    de: 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns so schnell wie möglich.',
  },
}

export const ui = (key: string, locale: Locale): string =>
  STRINGS[key]?.[locale] ?? STRINGS[key]?.nl ?? key
