import db from "../config/database.js";

// need to turn this into a transaction...
async function create({ name, lastStatus, time }) {
  await db.participants.insertOne({ name, lastStatus });
  await db.messages.insertOne({
    from: name,
    to: "Todos",
    text: "entra na sala...",
    type: "status",
    time,
  });
}

async function findOneByName({ name }) {
  return await db.participants.findOne({ name });
}

export default { create, findOneByName };
