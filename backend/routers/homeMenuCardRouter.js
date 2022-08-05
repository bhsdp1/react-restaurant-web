import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../Menucardsdata.js";
import MenuCard from "../models/menuCardModel.js";

const homeMenuCardRouter = express.Router();
homeMenuCardRouter.get('/', expressAsyncHandler(async (req, res) => {
    const homemenucards = await MenuCard.find({});
    res.send(homemenucards)
}))

homeMenuCardRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
    await MenuCard.remove({})
    const createdMenucards = await MenuCard.insertMany(data.homeMenuCards);
    res.send({createdMenucards});
}))

export default homeMenuCardRouter;