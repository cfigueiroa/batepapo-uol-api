import participantsRepositories from "../repositories/participantsRepositories.js";

async function removeInactiveParticipants() {
  const currentTimestamp = Date.now();
  await participantsRepositories.deleteManyInactive({ currentTimestamp });
}

function startRemoveInactiveParticipants() {
  async function loop() {
    await removeInactiveParticipants();
    setTimeout(loop, 15000);
  }
  loop();
}

export default startRemoveInactiveParticipants;
