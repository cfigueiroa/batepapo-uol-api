import messagesRepositories from "../repositories/messagesRepositories.js";
import errors from "../errors/index.js";
import dayjs from "dayjs";
import validMongoId from "../utils/ValidMongoId.js";
import { ObjectId } from "mongodb";

async function create({ message }) {
  const { from: name } = message;

  const existingParticipant = await messagesRepositories.findOneByName({ name });
  if (!existingParticipant) throw errors.unprocessableEntity();

  const formattedTime = dayjs(Date.now()).format("HH:mm:ss");

  const newMessage = { ...message, time: formattedTime };
  await messagesRepositories.create({ newMessage });
}

async function list({ user, limit }) {
  return messagesRepositories.listUserMessages({ user, limit });
}

async function del({ user, id }) {
  const objectId = new ObjectId(validMongoId(id));
  const message = await messagesRepositories.findOneById({ _id: objectId });

  if (!message) {
    throw errors.notFound();
  }

  const isAuthorized = message.from === user;

  if (isAuthorized) {
    const { _id } = message;
    await messagesRepositories.del({ _id });
  } else {
    throw errors.unauthorized();
  }
}

async function update({ newMessage, id }) {
  const objectId = new ObjectId(validMongoId(id));
  const message = await messagesRepositories.findOneById({ _id: objectId });

  if (!message) {
    throw errors.notFound();
  }

  const isAuthorized = message.from === newMessage.from;

  if (isAuthorized) {
    const { _id } = message;
    await messagesRepositories.update({ _id }, { $set: newMessage });
  } else {
    throw errors.unauthorized();
  }
}

export default { create, list, del, update };
