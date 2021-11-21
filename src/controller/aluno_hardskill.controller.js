import models from "../db/models";

const store = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "hardskills" },
  });

  let refsHardSkills = [];

  for (const h in aluno.hardskills) {
    let hardskill = aluno.hardskills[h];
    const [result] = await models.hardskill.findOrCreate({ where: hardskill });
    refsHardSkills.push(result.id);
  }

  model.addHardskill(refsHardSkills);

  return true;
};

const destroy = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "hardskills" },
  });

  let refsHardSkills = [];

  for (const h in aluno.hardskills) {
    let hardskill = aluno.hardskills[h];
    const result = await models.hardskill.findOne({ where: hardskill });
    if (result) refsHardSkills.push(result.id);
  }

  model.removeHardskill(refsHardSkills);

  return true;
};

export default { store, destroy };
