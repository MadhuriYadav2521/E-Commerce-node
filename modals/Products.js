import mongoose from "mongoose";
import { Schema } from "mongoose";

const Product = new Schema({
    productName : String,
    price : Number,
    image : [String]
});

export default mongoose.model("Products", Product)