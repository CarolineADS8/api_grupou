import models from "../db/models";

const store = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id },
    include: { association: "disciplinas" },
  });

  let refs = [];

  for (const m in professor.disciplinas) {
    let disciplinas = professor.disciplinas[m];
    const [result] = await models.disciplina.findOrCreate({
      where: disciplinas,
    });
    refs.push(result.id);
  }

  model.addDisciplina(refs);

  return true;
};

const destroy = async (professor, id) => {
  const model = await models.professor.findOne({
    where: { id },
    include: { association: "disciplinas" },
  });

  let refs = [];

  for (const g in professor.disciplinas) {
    const result = await models.disciplina.findOne({
      where: professor.disciplinas[g],
    });
    if (result) refs.push(result.id);
  }

  model.removeDisciplinas(refs);

  return true;
};

export default { store, destroy };
