import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Snack from "../../models/menuModels/snackModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const snackRouter = express.Router();

snackRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Snack.find({});
    res.send(menuItems);
})
);

snackRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Snack.insertMany(itemsdata.snacksMenu);
    res.send({createdMenu})
})
);

snackRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Snack.findById(req.params.id)
        if (menuitem) {
        res.send(menuitem);
        } else {
        res.status(404).send({ message: 'Product Not Found' });
        }
})
);

snackRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Snack({
            name: 'sample name' + Date.now(),
            image: '/images/category-items/snacks/m2.jpg',
            price: 0,
            category: 'snacks',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

export default snackRouter;