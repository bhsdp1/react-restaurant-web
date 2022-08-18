import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Burger from "../../models/menuModels/burgerModel.js";
import {isAdmin, isAuth} from '../../utils.js';

const burgerRouter = express.Router();

burgerRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Burger.find({});
    res.send(menuItems);
})
);

burgerRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Burger.insertMany(itemsdata.burgerMenu);
    res.send({createdMenu})
})
);

burgerRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const menuitem = await Burger.findById(req.params.id)
      if (menuitem) {
        res.send(menuitem);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
  })
);

burgerRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
      const menuItem = new Burger({
          name: 'sample name' + Date.now(),
          image: '/images/category-items/snacks/m2.jpg',
          price: 0,
          category: 'burger',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
      });
      const createdMenu = await menuItem.save();
      res.send({message: 'Menu Item Created', menuItem: createdMenu});
  })
);

burgerRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
      const menuItemId = req.params.id;
      const menuItem = await Burger.findById(menuItemId);
      if(menuItem) {
          menuItem.name = req.body.name;
          menuItem.price = req.body.price;
          menuItem.text = req.body.text;
          menuItem.category = 'burger';
          menuItem.image = req.body.image;
          const updatedmenu = await menuItem.save();
          res.send({message: 'Menu Item Updated', menuItem: updatedmenu});
      } else {
          res.status(404).send({message: 'Menu Item Not Found'});
      }
  })
)

export default burgerRouter;