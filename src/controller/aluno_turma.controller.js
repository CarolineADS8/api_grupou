import models from "../db/models";

const store = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "turmas" },
  });

  let refs = [];

  for (const m in aluno.turmas) {
    let turma = aluno.turmas[m];
    const [result] = await models.turma.findOrCreate({ where: turma });
    refs.push(result.id);
  }

  model.addTurma(refs);

  return true;
};

const destroy = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "turma" },
  });

  let refs = [];

  for (const g in aluno.turmas) {
    const result = await models.turma.findOne({
      where: aluno.turmas[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeSoftskill(refs);

  return true;
};

export default { store, destroy };
