import db from "../config/database.js";

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

export default { create, findOneByName, list };
