import { Router } from "express";
import messagesControllers from "../controllers/messagesControllers.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import convertUserHeaderEncodingMiddleware from "../middlewares/convertUserHeaderEncodingMiddleware.js";
import validateQueryLimitMiddleware from "../middlewares/validateQueryLimitMiddleware.js";
import schemas from "../schemas/index.js";

const messagesRoutes = Router();

messagesRoutes.post(
  "/",
  validationMiddleware(schemas.user, "headers"),
  validationMiddleware(schemas.message),
  convertUserHeaderEncodingMiddleware,
  messagesControllers.create
);
messagesRoutes.get(
  "/",
  validationMiddleware(schemas.user, "headers"),
  validateQueryLimitMiddleware,
  messagesControllers.list
);
messagesRoutes.delete("/:id", validationMiddleware(schemas.user, "headers"), messagesControllers.del);
messagesRoutes.put(
  "/:id",
  validationMiddleware(schemas.user, "headers"),
  validationMiddleware(schemas.message),
  convertUserHeaderEncodingMiddleware,
  messagesControllers.update
);

export default messagesRoutes;
