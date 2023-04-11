function errorFactory(name, message) {
  return { name, message };
}

export function unauthorized(message = "Unauthorized") {
  return errorFactory("UnauthorizedError", message);
}

export function notFound(message = "Not Found") {
  return errorFactory("NotFoundError", message);
}

export function conflict(message = "Conflict") {
  return errorFactory("ConflictError", message);
}

export function unprocessableEntity(message = "Unprocessable Entity") {
  return errorFactory("UnprocessableEntityError", message);
}
