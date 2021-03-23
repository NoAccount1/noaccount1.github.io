import { Url } from 'url';

export interface DocSection {
  name: string;
  summary: string;
}
export interface DocItem {
  name: string;
  id: string;
  summary: string;
  megaUrl: Url | null;
}

const GAMES = 'games';
const SOFTWARES = 'softwares';
export const SECTIONS: { [key: string]: DocSection } = {
  [GAMES]: {
    name: 'Components',
    summary: 'Angular Material offers a wide variety of UI components based on the <a' +
      ' href="https://material.io/components">Material Design specification</a>'
  },
  [SOFTWARES]: {
    name: 'CDK',
    summary: 'The Component Dev Kit (CDK) is a set of behavior primitives for building UI' +
      ' components.'
  },
};

const DOCS: { [key: string]: DocItem[] } = {
  [GAMES]: [
    {
      name: 'Celeste',
      id: 'celeste',
      summary: 'diejdeihzfiehuzi',
      megaUrl: null,
    },
  ],
  [SOFTWARES]: [
    {

    }
  ]
}