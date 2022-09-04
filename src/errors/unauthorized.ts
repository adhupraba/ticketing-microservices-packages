import { CustomError } from "./customError";

export class UnauthorizedError extends CustomError {
  statusCode = 401;
  #reason = "Not Authorized";

  constructor() {
    super("Not Authorized");
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.#reason }];
  }
}
