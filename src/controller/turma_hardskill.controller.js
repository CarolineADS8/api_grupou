import models from "../db/models";

const store = async (turma, id) => {
  const model = await models.turma.findOne({
    where: { id },
    include: { association: "hardskills" },
  });

  let refs = [];

  for (const m in turma.hardskills) {
    let hardskills = turma.hardskills[m];
    const [result] = await models.hardskill.findOrCreate({ where: hardskills });
    refs.push(result.id);
  }

  model.addHardskills(refs);

  return true;
};

const destroy = async (turma, id) => {
  const model = await models.turma.findOne({
    where: { id },
    include: { association: "hardskills" },
  });

  let refs = [];

  for (const g in turma.hardskills) {
    const result = await models.hardskill.findOne({
      where: turma.hardskills[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeHardskills(refs);

  return true;
};

export default { store, destroy };
