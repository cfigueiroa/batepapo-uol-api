import httpStatus from "http-status";

function errorMiddleware(err, _req, res, _next) {
  let statusCode;
  const response = err.message || "Internal Server Error";

  if (err.name) {
    switch (err.name) {
      case "UnauthorizedError":
        statusCode = httpStatus.UNAUTHORIZED;
        break;
      case "NotFoundError":
        statusCode = httpStatus.NOT_FOUND;
        break;
      case "ConflictError":
        statusCode = httpStatus.CONFLICT;
        break;
      case "UnprocessableEntityError":
        statusCode = httpStatus.UNPROCESSABLE_ENTITY;
        break;
      default:
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    }
  } else {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  }

  return res.status(statusCode).send(response);
}

export default errorMiddleware;
