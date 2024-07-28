import { Request, Response, NextFunction } from "express";

/*
METHOD: POST
URL: /api/v1/post/add
ACCESS: PRIVATE -> ONLY AUTHENTICATED USER
*/
export const createNewPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({ msg: "Post created!" });
  } catch (error) {
    next(error);
  }
};
