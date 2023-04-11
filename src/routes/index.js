import { Router } from "express";
import participantsRoutes from "./participantsRoutes.js";
import messagesRoutes from "./messagesRoutes.js";
import statusRoutes from "./statusRoutes.js";

const routes = Router();

routes.use("/participants", participantsRoutes);
routes.use("/messages", messagesRoutes);
routes.use("/status", statusRoutes);

routes.all("*", (_req, res, _next) => {
  res.sendStatus(404);
});

export default routes;
