import { CustomError } from "./customError";

export class ForbiddenError extends CustomError {
  statusCode = 403;
  #reason = "Forbidden";

  constructor() {
    super("Forbidden");
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [{ message: this.#reason }];
  }
}
