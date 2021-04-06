import { Injectable } from '@angular/core';
import { URL } from 'node:url';

export interface Section {
  name: string;
  summary: string;
}
export interface Item {
  name: string;
  id: string;
  packageName?: string;
  summary?: string;
  megaUrl?: URL;
}

const GAMES = 'games';
const SOFTWARES = 'softwares';
export const SECTIONS: { [key: string]: Section } = {
  [GAMES]: {
    name: 'Games',
    summary: 'A list of free games regularly updated'
  },
  [SOFTWARES]: {
    name: 'Softwares',
    summary: 'Some cracked softwares'
  },
};

const DOCS: { [key: string]: Item[] } = {
  [GAMES]: [
    {
      name: 'Celeste',
      id: 'celeste',
      summary: 'A platformer',
      megaUrl: new URL('https://mega.nz'),
    },
  ],
  [SOFTWARES]: [
    {
      name: 'SimpleMind Pro',
      id: 'simplemind',
      summary: 'A mindmap utility',
      megaUrl: new URL('https://mega.nz')
    }
  ]
};

for (const doc of DOCS[GAMES]) {
  doc.packageName = 'games';
  /*
  doc.examples =
    exampleNames
      .filter(key => key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
        !doc.exampleSpecs.exclude?.some(excludeName => key.indexOf(excludeName) === 0)); */
}

for (const doc of DOCS[SOFTWARES]) {
  doc.packageName = 'softwares';
  /*
  doc.examples =
    exampleNames
      .filter(key => key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
        !doc.exampleSpecs.exclude?.includes(key)); */
}

const ALL_GAMES = DOCS[GAMES];
const ALL_SOFTWARES = DOCS[SOFTWARES];
const ALL_DOCS = ALL_GAMES.concat(ALL_SOFTWARES);

@Injectable()
export class DocumentationItems {
  getItems(section: string): Item[] {
    if (section === GAMES) {
      return ALL_GAMES;
    }
    if (section === SOFTWARES) {
      return ALL_SOFTWARES;
    }
    return [];
  }

  getItemById(id: string, section: string): Item | undefined {
    const sectionLookup = section === 'games' ? 'games' : 'softwares';
    return ALL_DOCS.find(doc => doc.id === id && doc.packageName === sectionLookup);
  }
}
