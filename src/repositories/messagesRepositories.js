import db from "../config/database.js";

async function findOneByName({ name }) {
  return await db.participants.findOne({ name });
}

async function create({ newMessage }) {
  return await db.messages.insertOne(newMessage);
}

async function listUserMessages({ user, limit = 0 }) {
  return await db.messages
    .find({ $or: [{ to: "Todos" }, { to: user }, { from: user }] })
    .limit(limit)
    .toArray();
}

export default { findOneByName, create, listUserMessages };
