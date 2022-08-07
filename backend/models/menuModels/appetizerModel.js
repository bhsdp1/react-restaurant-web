import mongoose from "mongoose";

const appetizerMenuSchema = new mongoose.Schema({
    category: { type: String, required: true},
    name: { type: String, required: true, unique: true},
    price: { type: Number, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true }
}, {
    timestamps: true,
}
);

const Appetizer = mongoose.model('appetizer', appetizerMenuSchema);

export default Appetizer;