import { Router } from "express";
import messagesControllers from "../controllers/messagesControllers.js";

const messagesRoutes = Router();

messagesRoutes.post("/", messagesControllers.main);
messagesRoutes.get("/", messagesControllers.main);
messagesRoutes.delete("/:id", messagesControllers.main);
messagesRoutes.put("/:id", messagesControllers.main);

export default messagesRoutes;
