import db from "../config/database.js";

async function create({ participant, message }: any) {
  await db.participants.insertOne(participant);
  await db.messages.insertOne(message);
}

async function findOneByName({ name }: any) {
  return db.participants.findOne({ name });
}

async function list() {
  return db.participants.find().toArray();
}

async function find({ filter }: any) {
  return db.participants.find(filter).toArray();
}

async function deleteMany({ filter }: any) {
  return db.participants.deleteMany(filter);
}

async function insertMany({ messages }: any) {
  return db.messages.insertMany(messages);
}

export default { create, findOneByName, list, deleteMany, insertMany, find };
