import models from "../db/models";

const store = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "softskills" },
  });

  let refs = [];

  for (const m in aluno.softskills) {
    let softskill = aluno.softskills[m];
    const [result] = await models.softskill.findOrCreate({ where: softskill });
    refs.push(result.id);
  }

  model.addSoftskill(refs);

  return true;
};

const destroy = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "softskills" },
  });

  let refs = [];

  for (const g in aluno.softskills) {
    const result = await models.softskill.findOne({
      where: aluno.softskills[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeSoftskill(refs);

  return true;
};

export default { store, destroy };
