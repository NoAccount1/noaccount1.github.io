export interface Game {
  // TODO: Add official price
  // TODO: Add publication date
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

export const GAMES: Game[] = [
  {
    name: 'STAR WARS Battlefront I (classic 2004)',
    nameShort: 'Battlefront I',
    shortDesc: 'Le premier opus de STAR WARS Battlefront sortit en 2004',
    routeUrl: 'star-wars-bf-1',
    gameType: 'FPS',
    legalUrls: {
      steam: 'https://store.steampowered.com/app/1058020/STAR_WARS_Battlefront_Classic_2004/',
      gog: 'https://www.gog.com/game/star_wars_battlefront',
      origin: 'https://www.origin.com/bel/fr-fr/store/star-wars/star-wars-battlefront-classic-2004'
    },
    megaUrl: 'https://mega.nz/file/6Ydn2SDA#-hNVf0sQoKp1NezBf6ViofdSbWv5X6Ey4ZVGG3X_T1s',
    imgPath: 'assets/icons/bf_1.png'
  },
  {
    name: 'STAR WARS Battlefront II (classic 2005)',
    nameShort: 'Battlefront II',
    shortDesc: 'Le deuxième opus de STAR WARS Battlefront sortit en 2005',
    routeUrl: 'star-wars-bf-2',
    gameType: 'FPS',
    legalUrls: {
      steam: 'https://store.steampowered.com/app/6060/Star_Wars_Battlefront_2_Classic_2005/',
      origin: 'https://www.origin.com/fra/fr-fr/store/star-wars/star-wars-battlefront-ii-classic-2005',
      gog: 'https://www.gog.com/game/star_wars_battlefront_ii'
    },
    megaUrl: 'https://mega.nz/file/jYtQkZxT#V7o7Pif7ImFgdRraml-0kwbX98MUwmgh6kBzAjc9i6s',
    imgPath: 'assets/icons/bf_2.png'
  },
  {
    name: 'STAR WARS Republic Commando',
    nameShort: 'Republic Commando',
    shortDesc: 'Une aventure STAR WARS dans laquelle vous incarnez un commando de clone',
    routeUrl: 'star-wars-commando',
    gameType: 'Aventure',
    legalUrls: {
      steam: 'https://store.steampowered.com/app/6000/STAR_WARS_Republic_Commando/'
    },
    megaUrl: 'https://mega.nz/file/qZchVAoY#3Xqmp5OfIpHUEsXbQefPY5xsa63OM3xKwX8dWne_Emw',
    imgPath: 'assets/icons/commando.png'
  },
  {
    name: 'Among Us',
    shortDesc: 'Un jeux de déduction en ligne',
    routeUrl: 'among-us',
    version: '2020.11.4',
    gameType: 'Murder',
    legalUrls: {
      steam: 'https://store.steampowered.com/app/945360/Among_Us/'
    },
    megaUrl: 'https://mega.nz/file/mE0kiDDS#OIFXDuePzYvgxrqWCndmJfdpf2kPEkPyzzdUM5KwRUQ',
    imgPath: 'assets/icons/amongUs.png'
  },
  {
    name: 'Celeste',
    shortDesc: 'Un plateformer à la fois rageant et poétique par les créateurs de TowerfallAscention',
    routeUrl: 'celeste',
    megaUrl: 'https://mega.nz/file/rIsBASrb#8IWq-VN1W28exbj2q1JLRkezYuMrDDEqdPLDkL4btcE',
    legalUrls: {
      steam: 'https://store.steampowered.com/app/504230/Celeste/',
      epicGames: 'https://www.epicgames.com/store/en-US/product/celeste/home'
    },
    imgPath: 'assets/icons/celeste.png'
  }
];
