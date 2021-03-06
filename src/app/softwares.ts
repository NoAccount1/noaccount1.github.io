export interface Software {
  name: string;
  shortDesc: string;
  description?: string;
  megaUrl: string | null;
  routeUrl: any;
  version?: string;
  nameShort?: string;
  legalUrls?: {
    steam?: string;
    gog?: string;
    epicGames?: string;
    origin?: string;
  };
  gameType?: string;
  imgAlt?: string;
  imgPath: string;
}

export const SOFTWARES: Software[] = [
  {
    name: 'SimpleMind Pro',
    shortDesc: 'Un logiciel de mindmapping pour Windows et Mac',
    imgPath: '../assets/softwares-icons/simplemind.jpg',
    megaUrl: null,
    routeUrl: 'simplemind',
  }
];
