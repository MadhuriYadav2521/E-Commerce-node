
import express from "express";
import { getUserByEmail} from "../controllers/UserControllers.js";
import { addProduct, getAllProducts } from "../controllers/ProductControllers.js";

import { addProducttoCart, loginOtpCheckForEmail, loginOtpCheckForNumber,  otpCkeckForEmail, otpCkeckForNumber, otpLogin, otpRegistration, buyProduct, removeProductFromCart} from "../controllers/OtpControllers.js";
import { checkEmail } from "../middlewares/authMiddleware.js";

var router = express.Router();


router.post('/getUserByEmail',getUserByEmail)
router.post('/addProduct', addProduct);
router.post('/otpRegistration', otpRegistration);
router.post('/otpCkeckForNumber', otpCkeckForNumber);
router.post('/otpCkeckForEmail', otpCkeckForEmail);
router.post('/otpLogin',checkEmail, otpLogin);
router.post('/loginOtpCheckForEmail', loginOtpCheckForEmail);
router.post('/loginOtpCheckForNumber', loginOtpCheckForNumber);
router.post('/addProducttoCart', addProducttoCart);
router.post('/buyProduct', buyProduct);
router.post('/removeProductFromCart', removeProductFromCart);


router.get('/get-all-products', getAllProducts);

export default router;
