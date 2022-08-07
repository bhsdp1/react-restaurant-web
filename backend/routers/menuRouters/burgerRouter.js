import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Burger from "../../models/menuModels/burgerModel.js";

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
export default burgerRouter;