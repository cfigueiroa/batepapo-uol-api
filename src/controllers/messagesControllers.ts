import { Request, Response } from 'express';
import messagesServices from "../services/messagesServices.js";

async function create(req: Request, res: Response) {
  const { to, text, type } = req.body;
  const { user: from } = req.headers;

  const message = { to, text, type, from };

  await messagesServices.create({ message });
  res.sendStatus(201);
}

async function list(req: Request, res: Response) {
  const { user } = req.headers;
  const { limit } = res.locals;

  const messages = await messagesServices.list({ user, limit });
  res.send(messages);
}

async function del(req: Request, res: Response) {
  const { user } = req.headers;
  const { id } = req.params;

  await messagesServices.del({ user, id });
  res.sendStatus(200);
}

async function update(req: Request, res: Response) {
  const { to, text, type } = req.body;
  const { user: from } = req.headers;
  const { id } = req.params;

  const newMessage = { to, text, type, from };

  await messagesServices.update({ newMessage, id });
  res.sendStatus(200);
}

export default { create, list, del, update };
