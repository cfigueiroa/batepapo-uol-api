import db from "../config/database.js";

async function findOneByName({ name }) {
  return await db.participants.findOne({ name });
}

async function create({ newMessage }) {
  return await db.messages.insertOne(newMessage);
}

export default { findOneByName, create };
