import models from "../db/models";

const include = [
  "usuario",
  "hardskills",
  "turmas",
  "curso",
  "avaliacao360",
  "questaoDia",
  "grupos",
  "softskills",
  "tarefa",
];

const index = async () => {
  const list = await models.aluno.findAll({ include });
  return list;
};

const show = async (id) => {
  const result = await models.aluno.findByPk(id);
  return result;
};

const store = async (body) => {
  const result = await models.aluno.create(body, { include });
  return result;
};

const update = async (body, id) => {
  const result = await models.aluno.update(body, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.aluno.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
