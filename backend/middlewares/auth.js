import { User } from "../models/users.js";
import ErrorHandler from "./errorHandler.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token)
      return next(new ErrorHandler("Login first to access this resource", 401));

    const decoded = jwt.verify(token, "djvndfjkvbd");
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    next(error);
  }
};
