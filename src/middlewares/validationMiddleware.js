import errors from "../errors/index.js";

function validationMiddleware(schema, field = "body", status = false) {
  return (req, _res, next) => {
    const { error: validationError } = schema.validate(req[field], {
      abortEarly: false,
    });
    if (validationError) {
      if (status) {
        throw errors.notFound();
      }
      const errorMessages = validationError.details.map((detail) => detail.message);
      throw errors.unprocessableEntity(errorMessages);
    }
    next();
  };
}

export default validationMiddleware;
