import type { Locale } from './sanity'

// Home intro copy, ported verbatim from the live hoet-design.com home (4 languages).
// Newlines are intentional line breaks (rendered as <br>). Could move to Sanity later.
export interface HomeIntro {
  title: string
  para1: string
  h2: string
  para2: string
}

export const HOME_INTRO: Record<Locale, HomeIntro> = {
  nl: {
    title: 'Zicht en inzicht\nCreativiteit gestimuleerd door beperkingen',
    para1:
      'Ontwerpbureau Hoet neemt freelance designopdrachten aan van ondernemingen die een exclusieve brillenlijn in het verlengde van hun merk of identiteit willen laten realiseren.\nOok particulieren kunnen er hun eigen bril vorm laten geven.',
    h2: 'You never make a first impression twice',
    para2:
      'Hoet wordt gedreven door een passie voor innovatie,\nnieuwe technieken en materialen.\nZo creëren wij uniek eyewear design dat steeds verrast\nen waarin esthetiek, vernieuwing en draagcomfort\neen perfect evenwicht vormen.',
  },
  fr: {
    title: 'Voir et comprendre\nLes limites stimulent la créativité',
    para1:
      "Le bureau de design Hoet se charge en sous-traitance\nde missions de design pour des entreprises\nqui veulent faire réaliser\nune ligne exclusive de lunettes dans le prolongement\nde leur marque ou de leur identité.\nDes particuliers peuvent également faire donner forme\nà leurs propres lunettes.",
    h2: "Vous n'avez qu'une occasion de faire\nune première impression",
    para2:
      "Ce qui motive Hoet, c'est une passion pour l'innovation,\nles nouvelles techniques et les nouveaux matériaux.\nIls créent ainsi des lunettes au design unique, toujours surprenant, où esthétique, innovation et port confortable\nforment un équilibre parfait.",
  },
  en: {
    title: 'Sight and insight\nLimitations stimulate creativity',
    para1:
      'The Hoet Design Studio accepts freelance design assignments from companies that want to include an exclusive line of eyewear to enhance their brand or identity.\nPrivate individuals can also have their eyewear designed\nfor them personally.',
    h2: 'You never make a first impression twice.',
    para2:
      'Hoet is driven by passion for innovation,\nnew techniques and materials.\nThe company creates unique eyewear designs\nthat never fail to amaze and in which aesthetics,\ninnovation and wear comfort are perfectly balanced.',
  },
  de: {
    title: 'An- und Einsicht\nEinschränkungen regen die Kreativität an',
    para1:
      'Das Design-Studio Hoet nimmt Freelance-Designaufträge\nvon Unternehmen an, die eine exklusive Brillenlinie\nals Erweiterung ihrer Marke oder Identität verwirklichen möchten.\nAuch Privatpersonen können sich Ihre eigene Brille\nentwerfen lassen.',
    h2: 'You never make a first impression twice',
    para2:
      'Hoet wird von einer Leidenschaft für Innovation,\nneue Techniken und Materialien angetrieben.\nSo wird einzigartiges Eyewear-Design kreiert, das immer überrascht und\nin dem Ästhetik, Innovation und Tragekomfort\neine perfekte Ausgewogenheit bilden.',
  },
}
