import models from "../db/models";

const index = async () => {
  const list = await models.softskill.findAll();
  return list;
};

const show = async (id) => {
  const result = await models.softskill.findByPk(id);
  return result;
};

const store = async (body) => {
  const result = await models.softskill.create(body);
  return result;
};

const update = async (body, id) => {
  const result = await models.softskill.update(body, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await models.softskill.destroy({ where: { id } });
  return result;
};

export default { index, show, store, update, destroy };
