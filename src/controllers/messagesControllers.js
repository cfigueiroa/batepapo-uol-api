import messagesServices from "../services/messagesServices.js";

async function create(req, res, next) {
  const { to, text, type } = req.body;
  const { user: from } = req.headers;

  const message = { to, text, type, from };

  try {
    await messagesServices.create({ message });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function list(req, res, next) {
  const { user } = req.headers;
  const { limit } = res.locals;

  try {
    const messages = await messagesServices.list({ user, limit });
    res.send(messages);
  } catch (err) {
    next(err);
  }
}

async function del(req, res, next) {
  const { user } = req.headers;
  const { id } = req.params;

  try {
    await messagesServices.del({ user, id });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const { to, text, type } = req.body;
  const { user: from } = req.headers;
  const { id } = req.params;

  const newMessage = { to, text, type, from };

  try {
    await messagesServices.update({ newMessage, id });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export default { create, list, del, update };
