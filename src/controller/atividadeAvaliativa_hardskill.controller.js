import models from "../db/models";

const store = async (atividadeAvaliativa, id) => {
  const model = await models.atividadeAvaliativa.findOne({
    where: { id },
    include: { association: "hardskills" },
  });

  let refs = [];

  for (const m in atividadeAvaliativa.hardskills) {
    let hardskill = atividadeAvaliativa.hardskills[m];
    const [result] = await models.hardskill.findOrCreate({ where: hardskill });
    refs.push(result.id);
  }

  model.addHardskill(refs);

  return true;
};

const destroy = async (atividadeAvaliativa, id) => {
  const model = await models.atividadeAvaliativa.findOne({
    where: { id },
    include: { association: "hardskills" },
  });

  let refs = [];

  for (const g in atividadeAvaliativa.hardskills) {
    const result = await models.hardskill.findOne({
      where: aluno.hardskills[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeHardskill(refs);

  return true;
};

export default { store, destroy };
