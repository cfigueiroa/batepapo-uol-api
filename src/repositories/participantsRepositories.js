import db from "../config/database.js";

// need to turn this into a transaction...
async function create({ participant, message }) {
  await db.participants.insertOne(participant);
  await db.messages.insertOne(message);
}

async function findOneByName({ name }) {
  return db.participants.findOne({ name });
}

async function list() {
  return db.participants.find().toArray();
}

async function find({ filter }) {
  return db.participants.find(filter).toArray();
}

async function deleteMany({ filter }) {
  return db.participants.deleteMany(filter);
}

async function insertMany({ messages }) {
  return db.messages.insertMany(messages);
}

export default { create, findOneByName, list, deleteMany, insertMany, find };
