import mongoose from "mongoose";

const menuCardSchema = new mongoose.Schema({
    name : { type: String, required: true, unique: true},
    link : { type: String, required: true},
    class: { type: String, required: true},
    utilities : { type: String, required: true}
},{
    timestamps : true,
}
)

const MenuCard = mongoose.model('MenuCard', menuCardSchema);

export default MenuCard;