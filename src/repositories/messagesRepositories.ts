import db from "../config/database.js";

async function findOneByName({ name }: any) {
  return db.participants.findOne({ name });
}

async function create({ newMessage }: any) {
  return db.messages.insertOne(newMessage);
}

async function listUserMessages({ user, limit = 0 }: any) {
  return db.messages
    .find({ $or: [{ to: "Todos" }, { to: user }, { from: user }] })
    .limit(limit)
    .toArray();
}

async function findOneById(_id: any) {
  return db.messages.findOne(_id);
}

async function del(_id: any) {
  return db.messages.deleteOne(_id);
}

async function update(filter: any, newMessage: any) {
  return db.messages.updateOne(filter, newMessage);
}

export default { findOneByName, create, listUserMessages, findOneById, del, update };
