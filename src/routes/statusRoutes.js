import { Router } from "express";
import statusControllers from "../controllers/statusControllers.js";

const statusRoutes = Router();

statusRoutes.post("/", statusControllers.main);

export default statusRoutes;
