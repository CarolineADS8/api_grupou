import models from "../db/models";

const index = async () => {
  const list = await models.disciplina.findAll();
  return list;
};

const show = async (id) => {
  const result = await models.disciplina.findByPk(id);
  return result;
};

const store = async (body) => {
  const result = await models.disciplina.create(body);
  return result;
};

const update = async (body, id) => {
  const result = await models.disciplina.update(body, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.disciplina.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
