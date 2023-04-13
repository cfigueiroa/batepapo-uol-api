import messagesRepositories from "../repositories/messagesRepositories.js";
import errors from "../errors/index.js";
import dayjs from "dayjs";

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

export default { create, list };
