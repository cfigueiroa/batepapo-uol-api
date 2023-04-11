import { Router } from "express";
import messagesControllers from "../controllers/messagesControllers.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import schemas from "../schemas/index.js";

const messagesRoutes = Router();

messagesRoutes.post(
  "/",
  validationMiddleware(schemas.from, "headers"),
  validationMiddleware(schemas.message),
  messagesControllers.main
);
messagesRoutes.get("/", validationMiddleware(schemas.user, "headers"), messagesControllers.main);
messagesRoutes.delete("/:id", validationMiddleware(schemas.user, "headers"), messagesControllers.main);
messagesRoutes.put(
  "/:id",
  validationMiddleware(schemas.user_from, "headers"),
  validationMiddleware(schemas.message),
  messagesControllers.main
);

export default messagesRoutes;
