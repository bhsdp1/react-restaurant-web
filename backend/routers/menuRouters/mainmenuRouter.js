import express from "express";
import expressAsyncHandler from "express-async-handler";
import itemsdata from "../../Menuitemsdata.js";
import Mainmenu from "../../models/menuModels/mainmenuModel.js";

const mainmenuRouter = express.Router();

mainmenuRouter.get('/', expressAsyncHandler(async(req, res)=> {
    const menuItems = await Mainmenu.find({});
    res.send(menuItems);
})
);

mainmenuRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdMenu = await Mainmenu.insertMany(itemsdata.mainMenu);
    res.send({createdMenu})
})
);

mainmenuRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const menuitem = await Mainmenu.findById(req.params.id)
        if (menuitem) {
            res.send(menuitem);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);
export default mainmenuRouter;