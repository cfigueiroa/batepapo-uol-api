import { Router } from "express";
import participantsControllers from "../controllers/participantsControllers.js";

const participantsRoutes = Router();

participantsRoutes.post("/", participantsControllers.main);
participantsRoutes.get("/", participantsControllers.main);

export default participantsRoutes;
