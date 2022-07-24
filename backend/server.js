import express from 'express';
import data from './Menucardsdata.js'

const app = express();

app.get('/api/homemenucards', (req, res) => {
    res.send(data.homeMenuCards)
})

app.get('/api/menupagecards', (req, res) => {
    res.send(data.MenuPageCards)
})

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});