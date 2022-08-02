import express from 'express';
import cardsdata from './Menucardsdata.js';
import itemsdata from './Menuitemsdata.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/restaurent-web');

app.get('/api/homemenucards', (req, res) => {
    res.send(cardsdata.homeMenuCards)
})

app.get('/api/menupagecards', (req, res) => {
    res.send(cardsdata.MenuPageCards)
})

app.get('/api/burgermenu', (req, res) => {
    res.send(itemsdata.burgerMenu)
})

// for product detials page
app.get('/api/burgermenu/:id', (req, res) => {
    const item = itemsdata.burgerMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/snacksmenu', (req, res) => {
    res.send(itemsdata.snacksMenu)
})

// for product detials page
app.get('/api/snacksmenu/:id', (req, res) => {
    const item = itemsdata.snacksMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/pizzamenu', (req, res) => {
    res.send(itemsdata.pizzaMenu)
})

// for product detials page
app.get('/api/pizzamenu/:id', (req, res) => {
    const item = itemsdata.pizzaMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/appetizermenu', (req, res) => {
    res.send(itemsdata.appetizerMenu)
})

// for product detials page
app.get('/api/appetizermenu/:id', (req, res) => {
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

// for product detials page
app.get('/api/mainmenu/:id', (req, res) => {
    const item = itemsdata.mainMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/seafoodmenu', (req, res) => {
    res.send(itemsdata.seafoodMenu)
})
// for product detials page
app.get('/api/seafoodmenu/:id', (req, res) => {
    const item = itemsdata.seafoodMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})
app.get('/api/cocktailmenu', (req, res) => {
    res.send(itemsdata.cocktailMenu)
})
// for product detials page
app.get('/api/cocktailmenu/:id', (req, res) => {
    const item = itemsdata.cocktailMenu.find((x) => x.id === req.params.id);
    if(item) {
        res.send(item);
    } else {
        res.status(404).send({message: 'Menu Item Not Found'})
    }
})

app.get('/api/dessertmenu', (req, res) => {
    res.send(itemsdata.dessertMenu)
})
// for product detials page
app.get('/api/dessertmenu/:id', (req, res) => {
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

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});