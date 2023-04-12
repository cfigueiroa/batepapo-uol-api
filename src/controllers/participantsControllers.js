import participantsServices from "../services/participantsServices.js";

async function create(req, res, next) {
  const { name } = req.body;
  try {
    await participantsServices.create({ name });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function main(req, res, next) {
  res.sendStatus(200);
}

export default { create, main };
