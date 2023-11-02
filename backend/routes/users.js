import express from "express";
import {
  addToCart,
  createUser,
  getUserDetails,
  loginUser,
  logoutUser,
} from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/my", isAuthenticated, getUserDetails);
router.post("/add", isAuthenticated, addToCart);


export default router;
