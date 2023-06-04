
import express from "express";
import { getUserByEmail} from "../controllers/UserControllers.js";
import { addProduct } from "../controllers/ProductControllers.js";

import { addProducttoCart, loginOtpCheckForEmail, loginOtpCheckForNumber,  otpCkeckForEmail, otpCkeckForNumber, otpLogin, otpRegistration, buyProduct} from "../controllers/OtpControllers.js";
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


// router.get('/get-all-products', getAllProducts);

export default router;
