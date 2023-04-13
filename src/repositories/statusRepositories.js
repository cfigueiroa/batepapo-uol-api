import db from "../config/database.js";

async function findOneByName({ name }) {
  return await db.participants.findOne({ name });
}

async function updateParticipantLastStatus({ _id, lastStatus }) {
  return await db.participants.updateOne({ _id }, { $set: { lastStatus } });
}

export default { findOneByName, updateParticipantLastStatus };
