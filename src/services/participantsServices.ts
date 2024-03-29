import participantsRepositories from "../repositories/participantsRepositories.js";
import errors from "../errors/index.js";
import dayjs from "dayjs";

async function create({ name }: any) {
  const existingParticipant = await participantsRepositories.findOneByName({ name });
  if (existingParticipant) throw errors.conflict();

  const lastStatusTimestamp = Date.now();
  const formattedTime = dayjs(lastStatusTimestamp).format("HH:mm:ss");

  const participant = { name, lastStatus: lastStatusTimestamp };
  const message = {
    from: name,
    to: "Todos",
    text: "entra na sala...",
    type: "status",
    time: formattedTime,
  };

  return participantsRepositories.create({ participant, message });
}

async function list() {
  return participantsRepositories.list();
}

export default { create, list };
