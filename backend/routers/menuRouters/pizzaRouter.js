import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Pizza from "../../models/menuModels/pizzaModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const pizzaRouter = express.Router();

pizzaRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Pizza.find({});
    res.send(menuItems);
})
);

pizzaRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Pizza.insertMany(itemsdata.pizzaMenu);
    res.send({createdMenu})
})
);

pizzaRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Pizza.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

pizzaRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Pizza({
            name: 'sample name' + Date.now(),
            image: '/images/category-items/snacks/m2.jpg',
            price: 0,
            category: 'Pizza',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

export default pizzaRouter;