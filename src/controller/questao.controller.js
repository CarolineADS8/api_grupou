import models from "../db/models";

const index = async () => {
  const users = await models.questao.findAll({
    include: ["usuario"],
  });
  return users;
};

const show = async (id) => {
  const user = await models.questao.findByPk(id);
  return user;
};

const store = async (user) => {
  const result = await models.questao.create(user);
  return result;
};

const update = async (user, id) => {
  const result = await models.questao.update(user, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.questao.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
