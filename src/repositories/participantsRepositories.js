import db from "../config/database.js";

async function create({ participant, message }) {
  const session = db.client.startSession();
  session.startTransaction();

  try {
    await db.participants.insertOne(participant, { session });
    await db.messages.insertOne(message, { session });

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
}

async function findOneByName({ name }) {
  return await db.participants.findOne({ name });
}

export default { create, findOneByName };
