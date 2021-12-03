import models from "../db/models";

const store = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "grupos" },
  });

  let refs = [];

  for (const m in aluno.grupos) {
    let grupo = aluno.grupos[m];
    const [result] = await models.grupo.findOrCreate({ where: grupo });
    refs.push(result.id);
  }

  model.addGrupo(refs);

  return true;
};

const destroy = async (aluno, id_usuario) => {
  const model = await models.aluno.findOne({
    where: { id_usuario },
    include: { association: "grupos" },
  });

  let refs = [];

  for (const g in aluno.grupos) {
    const result = await models.grupo.findOne({ where: aluno.grupos[g] });
    if (result) refs.push(result.id);
  }

  model.removeGrupo(refs);

  return true;
};

export default { store, destroy };
