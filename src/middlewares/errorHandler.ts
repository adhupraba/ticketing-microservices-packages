import { CustomError } from "../errors/customError";
import { ErrorHandler } from "../types/errors";

export const errorHandler: ErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({ errors: [{ message: "Something went wrong!" }] });
};
