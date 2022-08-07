import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Seafood from "../../models/menuModels/seafoodModel.js";

const seafoodRouter = express.Router();

seafoodRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Seafood.find({});
    res.send(menuItems);
})
);

seafoodRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Seafood.insertMany(itemsdata.seafoodMenu);
    res.send({createdMenu})
})
);

seafoodRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Seafood.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);
export default seafoodRouter;