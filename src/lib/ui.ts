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
  cookieTitle: { nl: 'Wij gebruiken cookies', en: 'We use cookies', fr: 'Nous utilisons des cookies', de: 'Wir verwenden Cookies' },
  cookieText: {
    nl: 'Wij maken gebruik van cookies en andere tracking-technologieën om uw surfervaring op onze website te verbeteren, om gepersonaliseerde inhoud en advertenties te tonen, om ons websiteverkeer te analyseren en om te begrijpen waar onze bezoekers vandaan komen.',
    en: 'We use cookies and other tracking technologies to improve your browsing experience on our website, to show personalised content and ads, to analyse our website traffic and to understand where our visitors come from.',
    fr: "Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre navigation sur notre site, afficher des contenus et publicités personnalisés, analyser notre trafic et comprendre d'où viennent nos visiteurs.",
    de: 'Wir verwenden Cookies und andere Tracking-Technologien, um Ihr Surferlebnis auf unserer Website zu verbessern, personalisierte Inhalte und Werbung anzuzeigen, unseren Website-Verkehr zu analysieren und zu verstehen, woher unsere Besucher kommen.',
  },
  cookieAccept: { nl: 'Ik ga akkoord', en: 'I agree', fr: "J'accepte", de: 'Ich stimme zu' },
  cookieDecline: { nl: 'Ik weiger', en: 'I decline', fr: 'Je refuse', de: 'Ich lehne ab' },
  cookiePrefs: { nl: 'Wijzig mijn voorkeuren', en: 'Manage preferences', fr: 'Gérer mes préférences', de: 'Einstellungen ändern' },
  contactTitle: { nl: 'Contacteer ons', en: 'Contact us', fr: 'Contactez-nous', de: 'Kontaktieren Sie uns' },
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
