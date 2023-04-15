import { Request, Response, NextFunction } from "express";
import joi from "joi";
import errors from "../errors/index.js";
import sanitizeObject from "../utils/sanitizeObject.js";

interface CustomRequest extends Request {
  [key: string]: any;
}

function validationMiddleware(schema: joi.Schema, field = "body", status = false) {
  return (req: CustomRequest, _res: Response, next: NextFunction) => {
    req[field] = sanitizeObject(req[field]);
    const { error: validationError } = schema.validate(req[field], {
      abortEarly: false,
    });
    if (validationError) {
      if (status) {
        throw errors.notFound();
      }
      const errorMessages = validationError.details.map((detail) => detail.message).join(", ");
      throw errors.unprocessableEntity(errorMessages);
    }
    next();
  };
}

export default validationMiddleware;
