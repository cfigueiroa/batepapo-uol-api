import db from "../config/database.js";

async function findOneByName({ name }) {
  return db.participants.findOne({ name });
}

async function updateParticipantLastStatus({ _id, lastStatus }) {
  return db.participants.updateOne({ _id }, { $set: { lastStatus } });
}

export default { findOneByName, updateParticipantLastStatus };
