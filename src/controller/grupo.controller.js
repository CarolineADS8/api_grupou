import models from "../db/models";

const index = async () => {
  const users = await models.grupo.findAll();
  return users;
};

const show = async (id) => {
  const user = await models.grupo.findByPk(id);
  return user;
};

const store = async (user) => {
  const result = await models.grupo.create(user, {});
  return result;
};

const update = async (user, id) => {
  const result = await models.grupo.update(user, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.grupo.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
