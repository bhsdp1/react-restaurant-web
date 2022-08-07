import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Dessert from "../../models/menuModels/dessertModel.js";

const dessertRouter = express.Router();

dessertRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Dessert.find({});
    res.send(menuItems);
})
);

dessertRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Dessert.insertMany(itemsdata.dessertMenu);
    res.send({createdMenu})
})
);

dessertRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Dessert.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);
export default dessertRouter;