import express from "express";

// controllers
import { getUserByID } from "../controllers/userController";

export const userRoute = express.Router();

userRoute.get("/profile/:userId", getUserByID);
