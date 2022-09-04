import { RequestHandler } from "express";
import { UnauthorizedError } from "../errors";

export const requireAuth: RequestHandler = (req, res, next) => {
  if (!req.currentUser) {
    throw new UnauthorizedError();
  }

  next();
};
