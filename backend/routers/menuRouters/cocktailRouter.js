import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Cocktail from "../../models/menuModels/cocktailModel.js";

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
export default cocktailRouter;