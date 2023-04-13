import errors from "../errors/index.js";

function validateQueryLimitMiddleware(req, res, next) {
  const { limit } = req.query;

  if (limit === undefined) {
    return next();
  }

  const limitNumber = Number(limit);

  const isNotANumber = isNaN(limitNumber);
  const isLessThanOne = limitNumber < 1;
  const isNotAnInteger = limitNumber % 1 !== 0;
  
  const isInvalidLimit = isNotANumber || isLessThanOne || isNotAnInteger;

  if (isInvalidLimit) {
    throw errors.unprocessableEntity();
  }

  res.locals.limit = limitNumber;
  return next();
}

export default validateQueryLimitMiddleware;
