import express from 'express';
import cardsdata from './Menucardsdata.js';
import itemsdata from './Menuitemsdata.js';

const app = express();

app.get('/api/homemenucards', (req, res) => {
    res.send(cardsdata.homeMenuCards)
})

app.get('/api/menupagecards', (req, res) => {
    res.send(cardsdata.MenuPageCards)
})

app.get('/api/burgermenu', (req, res) => {
    res.send(itemsdata.burgerMenu)
})

app.get('/api/pizzamenu', (req, res) => {
    res.send(itemsdata.pizzaMenu)
})

app.get('/api/appetizermenu', (req, res) => {
    res.send(itemsdata.appetizerMenu)
})

app.get('/api/mainmenu', (req, res) => {
    res.send(itemsdata.mainMenu)
})

app.get('/api/dessertmenu', (req, res) => {
    res.send(itemsdata.dessertMenu)
})

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});