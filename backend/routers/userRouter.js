import express  from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import data from "../Menucardsdata.js";

const userRouter = express.Router();

userRouter.get('/seed',expressAsyncHandler(async (req, res) => {
    //this code remove all users before adding
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

export default userRouter;