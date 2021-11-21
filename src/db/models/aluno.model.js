import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "aluno";

const sequelize = getConnection();

const Aluno = sequelize.define(
  tableName,
  {
    matricula: {
      type: DataTypes.STRING(10),
    },
  },
  { sequelize, tableName, timestamps: false }
);

Aluno.associate = (models) => {
  Aluno.belongsTo(models.usuario, {
    foreignKey: {
      name: "id_usuario",
    },
    as: "usuario",
  });

  Aluno.belongsToMany(models.hardskill, {
    through: "aluno_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_aluno",
    },
    as: "hardskills",
  });

  Aluno.belongsToMany(models.turma, {
    through: "aluno_turma",
    timestamps: false,
    foreignKey: {
      name: "id_aluno",
    },
    as: "turmas",
  });

  Aluno.belongsTo(models.curso, {
    foreignKey: {
      name: "id_curso",
    },
    as: "curso",
  });

  Aluno.hasMany(models.avaliacao360, {
    foreignKey: { name: "id_aluno" },
    as: "avaliacao360",
  });

  Aluno.hasMany(models.questaoDia, {
    foreignKey: { name: "id_aluno" },
    as: "questaoDia",
  });

  Aluno.belongsToMany(models.grupo, {
    through: "aluno_grupo",
    timestamps: false,
    foreignKey: {
      name: "id_aluno",
    },
    as: "grupos",
  });

  Aluno.belongsToMany(models.softskill, {
    through: "aluno_softskill",
    timestamps: false,
    foreignKey: {
      name: "id_aluno",
    },
    as: "softskills",
  });

  Aluno.hasMany(models.tarefa, {
    foreignKey: { name: "id_aluno" },
    as: "tarefa",
  });
};

module.exports = Aluno;
