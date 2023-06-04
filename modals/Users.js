import mongoose from "mongoose";
import { Schema } from "mongoose";
// import Products from "./Products";
import { object } from "webidl-conversions";


const User = new Schema({
    name: String,
    email: String,
    password: String,
    // otp: String,
    number: Number,
    isNumberVerified : { type: Boolean, default: false },
    isEmailVerified : { type: Boolean, default: false },
    otpForNumber : String, 
    otpForEmail : String ,
    // loginOtp: String
    loginOtpForEmail: String,
    codeForLoginNumber: String,
    isloginNumberVerified : { type: Boolean, default: false },
    isloginEmailVerified : { type: Boolean, default: false },
    Products: []

    // 2 new shcema of number and emial with otp
    
});

export default mongoose.model("Users", User)