// // import jwt from "jsonwebtoken";
// // import User from "../models/Users.js";

// // export const protect = async (req, res, next) => {
// //     // const token = req.headers.authorization;
// //     const {token} = req.cookies;

// //     if (!token) {
// //         return res.json({ success: false, message: "Not authorized" });
// //     } 
// //      try {
// //         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

         
// //         if (tokenDecode.Id) {
// //             req.body.userId = tokenDecode.id}
// //         else{
// //             return res.json({ success: false, message: "User not found" });
// //         }
// //         req.user = await User.findById(userId).select("-password"); // added this extra
// //         next();

// //     //  try {
// //     //     const userId = jwt.decode(token, process.env.JWT_SECRET)

         
// //     //     if (!userId) {
// //     //         return res.json({ success: false, message: "User not found" });
// //     //     }

// //         // req.user = await User.findById(userId).select("-password");
// //         // next();
// //     } catch (error) {
// //         return res.json({ success: false, message: "Not authorized" });
// //     }
// // };  //previous one

import jwt from "jsonwebtoken";
import User from "../models/Users.js";

export const protect = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    req.user = user; // ✅ attach user object to req
    next();
  } catch (error) {
    return res.json({ success: false, message: "Not authorized" });
  }
};