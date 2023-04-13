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

async function deleteManyInactive({ currentTimestamp, maxInactivityDuration = 10000 }) {
  const minAllowedTimestamp = currentTimestamp - maxInactivityDuration;
  return db.participants.deleteMany({ lastStatus: { $lt: minAllowedTimestamp } });
}

export default { create, findOneByName, list, deleteManyInactive };
