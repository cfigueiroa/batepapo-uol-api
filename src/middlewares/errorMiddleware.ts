import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

interface ErrorStatusCodes {
  [key: string]: number;
}

const errorStatusCodes: ErrorStatusCodes = {
  UnauthorizedError: httpStatus.UNAUTHORIZED,
  NotFoundError: httpStatus.NOT_FOUND,
  ConflictError: httpStatus.CONFLICT,
  UnprocessableEntityError: httpStatus.UNPROCESSABLE_ENTITY,
};

function errorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
  const response = err.message || "Internal Server Error";
  const statusCode = errorStatusCodes[err.name] || httpStatus.INTERNAL_SERVER_ERROR;

  return res.status(statusCode).send(response);
}

export default errorMiddleware;
