import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "curso";

const sequelize = getConnection();

const Curso = sequelize.define(
  tableName,
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
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

Curso.associate = (models) => {
  Curso.hasMany(models.aluno, {
    foreignKey: { name: "id_curso" },
    as: "alunos",
  });

  Curso.belongsToMany(models.turma, {
    through: "curso_turma",
    timestamps: false,
    foreignKey: {
      name: "id_curso",
    },
    as: "turmas",
  });
};

module.exports = Curso;
