import statusRepositories from "../repositories/statusRepositories.js";
import errors from "../errors/index.js";

async function update({ name }) {
  const existingParticipant = await statusRepositories.findOneByName({ name });
  if (!existingParticipant) throw errors.notFound();
  const { _id } = existingParticipant;
  const lastStatus = Date.now();
  return statusRepositories.updateParticipantLastStatus({ _id, lastStatus });
}

export default { update };
