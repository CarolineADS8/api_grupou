import models from "../db/models";

const store = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id },
    include: { association: "turmas" },
  });

  let refs = [];

  for (const m in professor.turmas) {
    let turmas = professor.turmas[m];
    const [result] = await models.turma.findOrCreate({
      where: turmas,
    });
    refs.push(result.id);
  }

  model.addTurma(refs);

  return true;
};

const destroy = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id },
    include: { association: "turmas" },
  });

  let refs = [];

  for (const g in professor.turmas) {
    const result = await models.turma.findOne({
      where: professor.turmas[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeTurma(refs);

  return true;
};

export default { store, destroy };
