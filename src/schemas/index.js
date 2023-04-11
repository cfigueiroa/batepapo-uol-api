import joi from "joi";

const participant = joi.object({
  name: joi.string().trim().required().invalid("Todos"),
});

const message = joi.object({
  to: joi.string().trim().required(),
  text: joi.string().max(2000).required(),
  type: joi.string().required().valid("message", "private_message"),
});

const user = joi
  .object({
    user: joi.string().trim().required(),
  })
  .unknown();

const from = joi
  .object({
    from: joi.string().trim().required(),
  })
  .unknown();

const user_from = user.concat(from);

export default { participant, message, user, from, user_from };
