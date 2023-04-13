import statusServices from "../services/statusServices.js";

async function update(req, res, next) {
  const { user: name } = req.headers;
  try {
    await statusServices.update({ name });
    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export default { update };
