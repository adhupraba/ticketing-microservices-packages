import { UserPayload } from "./user";

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export * from "./errors";
export * from "./user";
