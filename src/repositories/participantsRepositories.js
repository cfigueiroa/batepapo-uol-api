import db from "../config/database.js";
import dayjs from "dayjs";

// need to turn this into a transaction...
async function create({ participant, message }) {
  await db.participants.insertOne(participant);
  await db.messages.insertOne(message);
}

async function findOneByName({ name }) {
  return await db.participants.findOne({ name });
}

async function list() {
  return await db.participants.find().toArray();
}

async function findAndDeleteManyInactive({ currentTimestamp, maxInactivityDuration = 10000 }) {
  const minAllowedTimestamp = currentTimestamp - maxInactivityDuration;
  const formattedTime = dayjs(currentTimestamp).format("HH:mm:ss");
  const filter = { lastStatus: { $lt: minAllowedTimestamp } };
  const users = await db.participants.find(filter).toArray();
  await db.participants.deleteMany(filter);
  if (users.length > 0) {
    await insertExitMessage({ users, formattedTime });
  }
  return;
}

async function insertExitMessage({ users, formattedTime: time }) {
  const buffer = [];
  for (let user of users) {
    const { name: from } = user;
    buffer.push({ from, to: "Todos", text: "sai da sala...", type: "status", time });
  }
  await db.messages.insertMany(buffer);
}

export default { create, findOneByName, list, findAndDeleteManyInactive };
