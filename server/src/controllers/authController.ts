import { NextFunction, Request, Response } from "express";

/*
URL: /api/v1/auth/login
METHOD: POST
ACCESS: PUBLIC
*/
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ msg: "User logged!" });
  } catch (error) {
    next(error);
  }
};

/*
URL: /api/v1/auth/register
METHOD: POST
ACCESS: PUBLIC
*/
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({ msg: "User profile created!" });
  } catch (error) {
    next(error);
  }
};
