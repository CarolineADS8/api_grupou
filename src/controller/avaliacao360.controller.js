import models from "../db/models";

const index = async () => {
  const list = await models.avaliacao360.findAll();
  return list;
};

const show = async (id) => {
  const result = await models.avaliacao360.findByPk(id);
  return result;
};

const store = async (body) => {
  const result = await models.avaliacao360.create(body);
  return result;
};

const update = async (body, id) => {
  const result = await models.avaliacao360.update(body, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.avaliacao360.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
