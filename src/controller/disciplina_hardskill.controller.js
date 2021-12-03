import models from "../db/models";

const store = async (disciplina, id) => {
  const model = await models.disciplina.findOne({
    where: { id },
    include: { association: "hardskills" },
  });

  let refs = [];

  for (const m in disciplina.hardskills) {
    let hardskills = disciplina.hardskills[m];
    const [result] = await models.hardskill.findOrCreate({ where: hardskills });
    refs.push(result.id);
  }

  model.addHardskills(refs);

  return true;
};

const destroy = async (disciplina, id) => {
  const model = await models.disciplina.findOne({
    where: { id },
    include: { association: "hardskills" },
  });

  let refs = [];

  for (const g in disciplina.hardskills) {
    const result = await models.hardskill.findOne({
      where: disciplina.hardskills[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeHardskills(refs);

  return true;
};

export default { store, destroy };
