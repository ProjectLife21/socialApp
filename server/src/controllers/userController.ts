import { Request, Response, NextFunction } from "express";

/*
URL: /api/v1/user/profile/:userId
METHOD: GET
ACCESS: PUBLIC
*/
export const getUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    res.status(200).json({ msg: "Get user by id: " + userId });
  } catch (error) {
    next(error);
  }
};
