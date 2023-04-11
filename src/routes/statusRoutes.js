import { Router } from "express";
import statusControllers from "../controllers/statusControllers.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import schemas from "../schemas/index.js";

const statusRoutes = Router();

statusRoutes.post("/", validationMiddleware(schemas.user, "headers"), statusControllers.main);

export default statusRoutes;
