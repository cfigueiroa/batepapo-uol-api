import participantsRepositories from "../repositories/participantsRepositories.js";
import errors from "../errors/index.js";
import dayjs from "dayjs";

async function create({ name }) {
  const existingParticipant = await participantsRepositories.findOneByName({ name });
  if (existingParticipant) throw errors.conflict();

  const lastStatusTimestamp = Date.now();
  const formattedTime = dayjs(lastStatusTimestamp).format("HH:mm:ss");

  return await participantsRepositories.create({ name, lastStatus: lastStatusTimestamp, time: formattedTime });
}

export default { create };
