import models from "../db/models";

const index = async () => {
  const users = await models.usuario.findAll({ include: ["aluno"] });
  return users;
};

const show = async (id) => {
  const user = await models.usuario.findByPk(id);
  return user;
};

const store = async (user) => {
  const result = await models.usuario.create(user, {
    include: ["aluno", "questoes", "professor"],
  });
  return result;
};

const update = async (user, id) => {
  const result = await models.usuario.update(user, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.usuario.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
