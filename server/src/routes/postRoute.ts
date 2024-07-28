import express from "express";

// controllers
import { createNewPost } from "../controllers/postController";

export const postRoute = express.Router();

postRoute.post("/add", createNewPost);
