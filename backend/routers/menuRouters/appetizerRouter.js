import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Appetizer from "../../models/menuModels/appetizerModel.js";

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
export default appetizerRouter;