import participantsRepositories from "../repositories/participantsRepositories.js";
import dayjs from "dayjs";

async function removeInactiveParticipants() {
  const currentTimestamp = Date.now();
  const maxInactivityDuration = 10000;
  const minAllowedTimestamp = currentTimestamp - maxInactivityDuration;
  const formattedTime = dayjs(currentTimestamp).format("HH:mm:ss");
  const filter = { lastStatus: { $lt: minAllowedTimestamp } };

  const inactiveUsers = await participantsRepositories.find({ filter });
  const hasInactiveUsers = inactiveUsers.length > 0;

  if (hasInactiveUsers) {
    const exitMessages = createExitMessages({ users: inactiveUsers, formattedTime });
    await participantsRepositories.deleteMany({ filter });
    await participantsRepositories.insertMany({ messages: exitMessages });
  }
}

function createExitMessages({ users, formattedTime }: any) {
  return users.map((user: any) => ({
    from: user.name,
    to: "Todos",
    text: "sai da sala...",
    type: "status",
    time: formattedTime,
  }));
}

function startRemoveInactiveParticipants() {
  async function loop() {
    await removeInactiveParticipants();
    setTimeout(loop, 15000);
  }

  loop();
}

export default startRemoveInactiveParticipants;
