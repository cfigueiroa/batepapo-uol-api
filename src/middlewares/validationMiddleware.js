import errors from "../errors/index.js";

function validationMiddleware(schema, field = "body") {
  return (req, _res, next) => {
    const { error: validationError } = schema.validate(req[field], {
      abortEarly: false,
    });
    if (validationError) {
      const errorMessages = validationError.details.map((detail) => detail.message);
      throw errors.unprocessableEntity(errorMessages);
    }
    next();
  };
}

export default validationMiddleware;
