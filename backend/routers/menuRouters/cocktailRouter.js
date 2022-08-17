import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Cocktail from "../../models/menuModels/cocktailModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const cocktailRouter = express.Router();

cocktailRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Cocktail.find({});
    res.send(menuItems);
})
);

cocktailRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Cocktail.insertMany(itemsdata.cocktailMenu);
    res.send({createdMenu})
})
);

cocktailRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Cocktail.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

cocktailRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Cocktail({
            name: 'sample name' + Date.now(),
            image: '/images/category-items/burger/m5.jpg',
            price: 0,
            category: 'cocktail',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

export default cocktailRouter;