import express from 'express';
import cardsdata from './Menucardsdata.js';
import itemsdata from './Menuitemsdata.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();
//add our data to local mongo database
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/restaurent-web');

app.get('/api/homemenucards', (req, res) => {
    res.send(cardsdata.homeMenuCards)
})

app.get('/api/menupagecards', (req, res) => {
    res.send(cardsdata.MenuPageCards)
})

app.get('/api/burger', (req, res) => {
    res.send(itemsdata.burgerMenu)
})
// for product details page
app.get('/api/burger/:id', (req, res) => {
    const item = itemsdata.burgerMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/snacks', (req, res) => {
    res.send(itemsdata.snacksMenu)
})
// for product details page
app.get('/api/snacks/:id', (req, res) => {
    const item = itemsdata.snacksMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/pizza', (req, res) => {
    res.send(itemsdata.pizzaMenu)
})
// for product details page
app.get('/api/pizza/:id', (req, res) => {
    const item = itemsdata.pizzaMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/appetizer', (req, res) => {
    res.send(itemsdata.appetizerMenu)
})
// for product details page
app.get('/api/appetizer/:id', (req, res) => {
    const item = itemsdata.appetizerMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/mainmenu', (req, res) => {
    res.send(itemsdata.mainMenu)
})
// for product details page
app.get('/api/mainmenu/:id', (req, res) => {
    const item = itemsdata.mainMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/seafood', (req, res) => {
    res.send(itemsdata.seafoodMenu)
})
// for product details page
app.get('/api/seafood/:id', (req, res) => {
    const item = itemsdata.seafoodMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/cocktail', (req, res) => {
    res.send(itemsdata.cocktailMenu)
})
// for product details page
app.get('/api/cocktail/:id', (req, res) => {
    const item = itemsdata.cocktailMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/dessert', (req, res) => {
    res.send(itemsdata.dessertMenu)
})
// for product details page
app.get('/api/dessert/:id', (req, res) => {
    const item = itemsdata.dessertMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})


app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready')
});

//shows the error message if email is duplicated in the sever
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});