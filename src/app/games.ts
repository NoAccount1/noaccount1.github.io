export interface Game {
    name: string;
    description: string;
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
    type?: string;
    imgAlt?: string;
    imgUrl?: string;
}

export const GAMES: Game[] = [
    {
        name: 'STAR WARS Battlefront I (classic 2004)',
        nameShort: 'Battlefront I',
        description: 'Le premier opus de STAR WARS Battlefront sortit en 2004',
        routeUrl: 'star-wars-bf-1',
        type: 'FPS',
        legalUrls: {
            steam: 'https://store.steampowered.com/app/1058020/STAR_WARS_Battlefront_Classic_2004/',
            gog: 'https://www.gog.com/game/star_wars_battlefront',
            origin: 'https://www.origin.com/bel/fr-fr/store/star-wars/star-wars-battlefront-classic-2004'
        },
        megaUrl: 'https://mega.nz/file/6Ydn2SDA#-hNVf0sQoKp1NezBf6ViofdSbWv5X6Ey4ZVGG3X_T1s',
        imgUrl: 'https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-39/256/Star-Wars-Battlefront-new-1-icon.png'
    },
    {
        name: 'STAR WARS Battlefront II (classic 2005)',
        nameShort: 'Battlefront II',
        description: 'Le deuxième opus de STAR WARS Battlefront sortit en 2005',
        routeUrl: 'star-wars-bf-2',
        type: 'FPS',
        legalUrls: {
            steam: 'https://store.steampowered.com/app/6060/Star_Wars_Battlefront_2_Classic_2005/',
            origin: 'https://www.origin.com/fra/fr-fr/store/star-wars/star-wars-battlefront-ii-classic-2005',
            gog: 'https://www.gog.com/game/star_wars_battlefront_ii'
        },
        megaUrl: null,
        imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d5xh8gn-9c8a7f84-01e8-4cdd-b635-27d90f3842a9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDZiNjNkM2MtYWU2Ny00NjRjLTlhMzctNjcwODI5YjJhMTU3XC9kNXhoOGduLTljOGE3Zjg0LTAxZTgtNGNkZC1iNjM1LTI3ZDkwZjM4NDJhOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZgIzw-2GqlIM-5gUasPbxoh6qI-ZibqkuabBo19iUNg'
    },
    {
        name: 'STAR WARS Republic Commando',
        nameShort: 'Republic Commando',
        description: 'Une aventure STAR WARS dans laquelle vous incarnez un commando de clone',
        routeUrl: 'star-wars-commando',
        type: 'Aventure',
        megaUrl: null,
        imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f02547a-26de-46c9-b9e1-f951abbe943b/d4wi6cl-d17e23ed-7c93-41c4-a419-740777d58c56.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmYwMjU0N2EtMjZkZS00NmM5LWI5ZTEtZjk1MWFiYmU5NDNiXC9kNHdpNmNsLWQxN2UyM2VkLTdjOTMtNDFjNC1hNDE5LTc0MDc3N2Q1OGM1Ni5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2e6xzbw6elGEsGlGaUBqrypFDLaXx1C9s1NXrdFJ3Ng'
    },
    {
        name: 'Among Us',
        description: 'Un jeux de déduction en ligne',
        routeUrl: 'among-us',
        version: '2020.11.4',
        type: 'Murder',
        megaUrl: null,
        imgUrl: 'https://lh3.googleusercontent.com/proxy/AFHgnjSVIzMkI_JkVAS4Z0-Kcs6aCcTL7VMMxyZfZbR2XJrZd78-YbzLM8Ab1SKAhnmfmPUvAttdAwmWWHqWvX7laDZCLl00Z1xwIsTTDErRZnhPFLprfx8'
    }
];
