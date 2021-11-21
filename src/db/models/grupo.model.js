import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "grupo";

const sequelize = getConnection();

const Grupo = sequelize.define(
  tableName,
  {
    descricao: {
      type: DataTypes.STRING(50),
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "criado_em",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "atualizado_em",
    },
  },
  { sequelize, tableName }
);

Grupo.associate = (models) => {
  Grupo.belongsToMany(models.aluno, {
    through: "aluno_grupo",
    timestamps: false,
    foreignKey: {
      name: "id_grupo",
    },
    as: "alunos",
  });

  Grupo.belongsTo(models.turma, {
    foreignKey: { name: "id_turma" },
    as: "turma",
  });

  Grupo.belongsTo(models.atividadeAvaliativa, {
    foreignKey: { name: "id_atividadeAvaliativa" },
    as: "atividadeAvaliativa",
  });

  Grupo.hasMany(models.avaliacao360, {
    foreignKey: { name: "id_grupo" },
    as: "avaliacao360",
  });

  Grupo.hasMany(models.tarefa, {
    foreignKey: { name: "id_grupo" },
    as: "tarefas",
  });
};

module.exports = Grupo;
