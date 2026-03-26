// import User from "../models/Users";

// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         console.log(users);
//         if (!users || users.length === 0){
//             return res.status(404).json ({message: "No User Found"});

//         }
//         return res.status(200).json(users)
//     } catch (error) {
//        next (error);
//     }
// }

import User from "../models/Users.js"; // Make sure this path is correct

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users);

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No User Found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error); // Pass error to Express error handler
  }
};