import messagesRepositories from "../repositories/messagesRepositories.js";
import errors from "../errors/index.js";
import dayjs from "dayjs";
import isValidMongoId from "../utils/isValidMongoId.js";
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
  return await messagesRepositories.listUserMessages({ user, limit });
}

async function del({ user, id }) {
  if (!isValidMongoId(id)) throw errors.notFound();

  const message = await messagesRepositories.findOneById({ _id: new ObjectId(id) });
  if (!message) throw errors.notFound();

  if (message.from === user) {
    const { _id } = message;
    await messagesRepositories.del({ _id });
  } else {
    throw errors.unauthorized();
  }
}

export default { create, list, del };
