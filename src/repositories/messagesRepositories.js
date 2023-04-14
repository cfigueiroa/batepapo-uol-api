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

async function findOneById(_id) {
  return await db.messages.findOne(_id);
}

async function del(_id) {
  return await db.messages.deleteOne(_id);
}

async function update(filter, newMessage) {
  return await db.messages.updateOne(filter, newMessage);
}

export default { findOneByName, create, listUserMessages, findOneById, del, update };
