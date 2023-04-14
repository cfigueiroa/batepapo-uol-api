import statusServices from "../services/statusServices.js";

async function update(req, res) {
  const { user: name } = req.headers;

  await statusServices.update({ name });
  res.sendStatus(200);
}

export default { update };
