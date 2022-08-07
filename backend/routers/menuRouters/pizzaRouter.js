import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Pizza from "../../models/menuModels/pizzaModel.js";

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
export default pizzaRouter;