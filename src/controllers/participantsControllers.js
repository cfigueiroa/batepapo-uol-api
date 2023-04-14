import participantsServices from "../services/participantsServices.js";

async function create(req, res, next) {
  const { name } = req.body;
  try {
    await participantsServices.create({ name });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function list(_req, res, next) {
  try {
    const participantsList = await participantsServices.list();
    res.status(200).send(participantsList);
  } catch (err) {
    next(err);
  }
}

export default { create, list };
