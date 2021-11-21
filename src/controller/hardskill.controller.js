import models from "../db/models";

const index = async () => {
  const users = await models.hardskill.findAll();
  return users;
};

const show = async (id) => {
  const user = await models.hardskill.findByPk(id);
  return user;
};

const store = async (user) => {
  const result = await models.hardskill.create(user);
  return result;
};

const update = async (user, id) => {
  const result = await models.hardskill.update(user, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.hardskill.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
