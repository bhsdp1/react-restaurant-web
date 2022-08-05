import bcrypt from 'bcryptjs'
const data = {
    users:[
        {
            name: 'soham',
            email: 'sohampurao12@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin : true,
        },
        {
            name: 'user',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin : false,
        }
    ],
// Note : class name is returned to display background images
homeMenuCards: [
    {
        id: '1',
        name : 'Menu',
        link : 'Menu',
        class : 'home-card-1',
        utilities: "col-xxl-4 col-md-6 col-sm-12 mt-lg-3 my-4"
    },
    {
        id: "2",
        name : 'Burger',
        link : 'burger',
        class: 'home-card-2',
        utilities: "col-xxl-4 col-md-6 col-sm-12 mt-lg-3 my-4"
    },
    {
        id: "3",
        name : 'snacks',
        link: 'snacks',
        class: 'home-card-3',
        utilities: "col-xxl-4 col-sm-12 mt-lg-3 my-4 col-12"
    }
],
MenuPageCards: [
    {
        id: '1',
        name : 'Appetizer',
        link : 'appetizer',
        class : 'menu-card-1',
        utilities: "col-xl-4 col-md-6 col-sm-12 mt-5 my-sm-4"
    },
    {
        id: '2',
        name : 'Main-Menu',
        link : 'mainmenu',
        class : 'menu-card-2',
        utilities: "col-xl-4 col-md-6 col-sm-12 mt-5 my-sm-4"
    },
    {
        id: '3',
        name : 'Seafood',
        link : 'seafood',
        class : 'menu-card-3',
        utilities: "col-xl-4 col-md-6 col-sm-12 mt-5 my-sm-4"
    },
    {
        id: '5',
        name : 'Pizza',
        link : 'pizza',
        class : 'menu-card-4',
        utilities: "col-xl-4 col-md-6 col-sm-12 mt-5 my-sm-4"
    },
    {
        id: '6',
        name : "Cocktail's",
        link : 'cocktail',
        class : 'menu-card-5',
        utilities: "col-xl-4 col-md-6 col-sm-12 mt-5 my-sm-4"
    },
    {
        id: '7',
        name : "Dessert's",
        link : 'dessert',
        class : 'menu-card-6',
        utilities: "col-xl-4 col-md-6 col-sm-12 mt-5 my-sm-4"
    },
]
};

export default data;