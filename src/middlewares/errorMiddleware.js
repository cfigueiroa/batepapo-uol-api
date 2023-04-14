import httpStatus from "http-status";

function errorMiddleware(err, _req, res, _next) {
  let statusCode;
  let response;

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

  response = err.message || "Internal Server Error";

  return res.status(statusCode).send(response);
}

export default errorMiddleware;
