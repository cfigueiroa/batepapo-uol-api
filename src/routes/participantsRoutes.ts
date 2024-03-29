import { Router } from "express";
import participantsControllers from "../controllers/participantsControllers.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import schemas from "../schemas/index.js";

const participantsRoutes = Router();

participantsRoutes.post(
  "/",
  validationMiddleware(schemas.participant),
  participantsControllers.create
);
participantsRoutes.get("/", participantsControllers.list);

export default participantsRoutes;
