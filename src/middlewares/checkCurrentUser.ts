import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../types/user";

export const checkCurrentUser: RequestHandler = async (req, res, next) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}

  next();
};
