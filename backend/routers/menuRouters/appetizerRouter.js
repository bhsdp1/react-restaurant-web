import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Appetizer from "../../models/menuModels/appetizerModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const appetizerRouter = express.Router();

appetizerRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Appetizer.find({});
    res.send(menuItems);
})
);

appetizerRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Appetizer.insertMany(itemsdata.appetizerMenu);
    res.send({createdMenu})
})
);

appetizerRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Appetizer.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

appetizerRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItem = new Appetizer({
            name: 'sample name' + Date.now(),
            image: '/images/category-items/snacks/m2.jpg',
            price: 0,
            category: 'appetizer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        });
        const createdMenu = await menuItem.save();
        res.send({message: 'Menu Item Created', menuItem: createdMenu});
    })
);

appetizerRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const menuItemId = req.params.id;
        const menuItem = await Appetizer.findById(menuItemId);
        if(menuItem) {
            menuItem.name = req.body.name;
            menuItem.price = req.body.price;
            menuItem.text = req.body.text;
            menuItem.category = 'appetizer';
            menuItem.image = req.body.image;
            const updatedmenu = await menuItem.save();
            res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
        } else {
            res.status(404).send({message: 'Menu Item Not Found'});
        }
    })
)
export default appetizerRouter;