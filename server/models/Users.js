import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true },
    role: {type: String,enum: ["owner", "user"], default: 'user'}, // i have changed the admin to owner
    // name: {type: String, default: ''},
    verifyOtp : {type: String, default:' '},
    verifyOtpExpireAt : {type: Number, default: 0},
    isAccountVerified : {type: Boolean, default: false},
    resetOtp : {type: String, default:' '},
    resetOtpExpiredAt : {type: Number, default: 0},

},{timestamps: true}) 

const User = mongoose.models.User || mongoose.model('User', userSchema) // i have added the mongoose.models.User

export default User;
