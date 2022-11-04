const cheeseData = [
    { 
        id: 1,
        title: "Parmesan",
        description: "An Italian hard, granular cheese produced from cows’ milk and aged at least 12 months. ",
    },
    {
        id: 2,
        title: "Pecorino",
        description: "A hard Italian cheese made from sheep's milk.",
    },
    {
        id: 3,
        title: "Cheddar",
        description: "A natural cheese that is relatively hard, off-white (or orange) , and sometimes sharp-tasting.",
    },
    {
        id: 4,
        title: "Asiago",
        description: "A cow's milk cheese that can assume different textures according to its aging, from smooth to crumbly.",
    },
    {
        id: 5,
        title: "Gruyere",
        description: "A hard Swiss cheese that originated in the cantons of Fribourg, Vaud, Neuchâtel, Jura, and Berne in Switzerland.",
    },
    {
        id: 6,
        title: "Gouda",
        description: "A sweet, creamy, yellow cow's milk cheese originating from the Netherlands.",
    },
    {
        id: 7,
        title: "Comte",
        description: "A French cheese made from unpasteurized cow's milk in the Franche-Comté region of eastern France.",
    },
    {
        id: 8,
        title: "Camembert",
        description: "A moist, soft, creamy, surface-ripened cow's milk cheese.",
    },
    {
        id: 9,
        title: "Brie",
        description: "A soft cow's-milk cheese named after Brie, the French region from which it originated.",
    }
];

const boardData = [
    {
        id: 1,
        type: 'First Board',
        description: 'The first board created',
        rating: null
    },
    {
        id: 2,
        type: 'Second Board',
        description: 'The second board created',
        rating: 7
    },
    {
        id: 3,
        type: 'Third Board',
        description: 'The third board created',
        rating: 9
    },
    {
        id: 4,
        type: 'Fourth Board',
        description: 'The fourth board created',
        rating: 4
    },
    {
        id: 5,
        type: 'Fifth Board',
        description: 'The fifth board created',
        rating: null
    },
    {
        id: 6,
        type: 'Sixth Board',
        description: 'The sixth board created',
        rating: 6
    }
];

const userData = [
    {
        id: 1,
        name: "Jedediah Piwall",
        email: "jpiwall0@hostgator.com"
    },
    {
        id: 2,
        name: "Rosie Silvers",
        email: "rsilvers1@paginegialle.it"
    },
    {
        id: 3,
        name: "Phyllis Brotheridge",
        email: "pbrotheridge2@bandcamp.com"
    },
    {
        id: 4,
        name: "Hedvige Coucha",
        email: "hcoucha3@nifty.com"
    },
    {
        id: 5,
        name: "Melanie Lenaghen",
        email: "mlenaghen4@ftc.gov"
    },
    {
        id: 6,
        name: "Lauree Dracey",
        email: "ldracey5@lulu.com"
    },
    {
        id: 7,
        name: "Stanislaus Canfer",
        email: "scanfer6@kickstarter.com"
    },
    {
        id: 8,
        name: "Orazio Staddart",
        email: "ostaddart7@wsj.com"
    },
    {
        id: 9,
        name: "Janos Parkhouse",
        email: "jparkhouse8@technorati.com"
    },
    {
        id: 10,
        name: "Lorenzo Doerling",
        email: "ldoerling9@google.es"
    }
];

const cheeseToBoard = {
    1: [2],
    3: [5, 6],
    7: [2, 6]
};

const boardToCheese = {
    4: [1, 3],
    2: [6]
}

module.exports = { cheeseData, boardData, userData, cheeseToBoard, boardToCheese };