import models from "../db/models";

const store = async (avaliacao360, id) => {
  const model = await models.avaliacao360.findOne({
    where: { id },
    include: { association: "softskills" },
  });

  let refs = [];

  for (const m in avaliacao360.softskills) {
    let softskills = avaliacao360.softskills[m];
    const [result] = await models.softskill.findOrCreate({ where: softskills });
    refs.push(result.id);
  }

  model.addSoftskill(refs);

  return true;
};

const destroy = async (avaliacao360, id) => {
  const model = await models.avaliacao360.findOne({
    where: { id },
    include: { association: "softskills" },
  });

  let refs = [];

  for (const g in avaliacao360.softskills) {
    const result = await models.softskill.findOne({
      where: avaliacao360.softskills[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeSoftskill(refs);

  return true;
};

export default { store, destroy };
