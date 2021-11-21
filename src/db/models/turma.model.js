import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "turma";

const sequelize = getConnection();

const Turma = sequelize.define(
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

Turma.associate = (models) => {
  Turma.belongsToMany(models.aluno, {
    through: "aluno_turma",
    timestamps: false,
    foreignKey: {
      name: "id_turma",
    },
    as: "alunos",
  });

  Turma.belongsToMany(models.professor, {
    through: "professor_turma",
    timestamps: false,
    foreignKey: {
      name: "id_turma",
    },
    as: "professores",
  });

  Turma.belongsToMany(models.curso, {
    through: "curso_turma",
    timestamps: false,
    foreignKey: {
      name: "id_turma",
    },
    as: "cursos",
  });

  Turma.hasMany(models.grupo, {
    foreignKey: { name: "id_turma" },
    as: "grupos",
  });

  Turma.belongsTo(models.disciplina, {
    foreignKey: { name: "id_disciplina" },
    as: "disciplina",
  });

  Turma.belongsToMany(models.hardskill, {
    through: "turma_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_turma",
    },
    as: "hardskill",
  });

  Turma.hasMany(models.atividadeAvaliativa, {
    foreignKey: { name: "id_turma" },
    as: "atividadeAvaliativas",
  });
};

module.exports = Turma;
