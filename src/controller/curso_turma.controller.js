import models from "../db/models";
// curso_turma
const store = async (curso, id) => {
  const model = await models.curso.findOne({
    where: { id },
    include: { association: "turmas" },
  });

  let refs = [];

  for (const m in curso.turmas) {
    let turma = curso.turmas[m];
    const [result] = await models.turma.findOrCreate({ where: turma });
    refs.push(result.id);
  }

  model.addTurma(refs);

  return true;
};

const destroy = async (curso, id) => {
  const model = await models.curso.findOne({
    where: { id },
    include: { association: "turma" },
  });

  let refs = [];

  for (const g in curso.turmas) {
    const result = await models.turma.findOne({
      where: curso.turmas[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeSoftskill(refs);

  return true;
};

export default { store, destroy };
