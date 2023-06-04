import { response } from "express";
import Products from "../modals/Products.js";
import Users from '../modals/Users.js';
export const addProduct = async (req, res) => {
    try {
        const { Name, Price, Image } = req.body;
        if (!Name) return res.send("Name is required!");
        if (!Price) return res.send("Price is requierd!");
        if (!Image) return res.send("Price is requierd!");
        const product = new Products({
            name: Name,
            price: Price,
            image: Image
        })
        console.log(product, "products here");
        await product.save();
        return res.send(product);
    } catch (error) {
        console.log(error)
    }
}




