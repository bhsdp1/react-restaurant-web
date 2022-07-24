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

app.get('/api/burgermenurightleft', (req, res) => {
    res.send(itemsdata.burgerMenu.left)
})
app.get('/api/burgermenuright', (req, res) => {
    res.send(itemsdata.burgerMenu.right)
})

app.get('/api/pizzamenuleft', (req, res) => {
    res.send(itemsdata.pizzaMenu.left)
})
app.get('/api/pizzamenuright', (req, res) => {
    res.send(itemsdata.pizzaMenu.right)
})

app.get('/api/appetizerleft', (req, res) => {
    res.send(itemsdata.appetizer.left)
})
app.get('/api/appetizerright', (req, res) => {
    res.send(itemsdata.appetizer.right)
})

app.get('/api/mainmenuleft', (req, res) => {
    res.send(itemsdata.mainMenu.left)
})
app.get('/api/mainmenuright', (req, res) => {
    res.send(itemsdata.mainMenu.right)
})

app.get('/api/dessertmenuleft', (req, res) => {
    res.send(itemsdata.dessertMenu.left)
})
app.get('/api/dessertmenu', (req, res) => {
    res.send(itemsdata.dessertMenu.right)
})

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});