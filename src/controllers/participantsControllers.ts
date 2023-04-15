import { Request, Response } from 'express';
import participantsServices from "../services/participantsServices.js";

async function create(req: Request, res: Response) {
  const { name } = req.body;

  await participantsServices.create({ name });
  res.sendStatus(201);
}

async function list(_req: Request, res: Response) {
  const participantsList = await participantsServices.list();
  res.status(200).send(participantsList);
}

export default { create, list };
