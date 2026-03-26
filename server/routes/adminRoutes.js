
// import { Router, express } from "express";
// import { getAllUsers } from "../controllers/adminController";
 

// Router.route('/users').get(getAllUsers);

// export default Router


import express from "express";
import { getAllUsers } from "../controllers/adminController.js";

const router = express.Router();

router.route("/users").get(getAllUsers);

export default router;