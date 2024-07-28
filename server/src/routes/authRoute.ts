import express from "express";

// constrollers
import { registerUser, loginUser } from "../controllers/authController";

export const authRoute = express.Router();

authRoute.post("/login", loginUser);

authRoute.post("/register", registerUser);
