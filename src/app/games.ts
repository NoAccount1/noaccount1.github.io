export interface Game {
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
    name: 'Ori and the Blind Forest - Definitive edition',
    nameShort: 'Ori and the Blind Forest',
    shortDesc: 'Un plateformer dans lequel vous incarnez un petit esprit sylvestre nommé Ori, dont la forêt dans laquelle il vit s\'est considérablement dégradée à la suite d\'évènements mystérieux.',
    routeUrl: 'ori-blind-forest',
    gameType: 'Plateformer',
    megaUrl: 'https://mega.nz/file/zNtTzaIA#Jd5yikfLsYiVTwCZrqiHz6Tzof-BiV2ikbecbJKRGCo',
    imgPath: 'assets/icons/ori-bf.png'
  },
  {
    name: 'Absolute Drift - Zen Edition',
    nameShort: 'Absolute Drift',
    shortDesc: 'Un jeu de voiture basé sur le contrôle et la maitrise de la voiture',
    routeUrl: 'absolute-drift',
    megaUrl: 'https://mega.nz/file/vV93QIKa#mmaQDRhaGxJguYG5KkXd8WjTxPrWMdZY0SrznNx62-k',
    imgPath: 'assets/icons/absolute-drift.png'
  },
  {
    name: 'Bloons Tower Defense 6',
    nameShort: 'Bloon TD 6',
    shortDesc: 'Un tower defense de la série Bloons',
    routeUrl: 'bloons-td6',
    gameType: 'Tower defense',
    megaUrl: 'https://mega.nz/file/Gck1FY6Q#_5IN6sbo4fU-Tzjjdo-Ec_vpJ0alvheOfhwkH6r1DEk',
    imgPath: 'assets/icons/btd6.png'
  },
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
  },
  {
    name: 'Katana ZERO',
    shortDesc: 'Un jeu en deux dimension où vous incarnez un assassin ninja dans la banlieue d\'une grande ville',
    megaUrl: null,
    legalUrls: {},
    imgPath: 'assets/icons/katana-zero.png',
    routeUrl: 'katana-zero'
  }
];
