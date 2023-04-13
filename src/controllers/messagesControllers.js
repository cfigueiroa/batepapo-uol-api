import messagesServices from "../services/messagesServices.js";

async function create(req, res, next) {
  const { to, text, type } = req.body;
  const { user: from } = req.headers;

  const message = { to, text, type, from };

  try {
    await messagesServices.create({ message });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function list(req, res, next) {
  const { user } = req.headers;
  const { limit } = res.locals;

  try {
    const messages = await messagesServices.list({ user, limit });
    return res.send(messages);
  } catch (err) {
    next(err);
  }
}

async function main(req, res, next) {
  res.sendStatus(200);
}

export default { main, create, list };
