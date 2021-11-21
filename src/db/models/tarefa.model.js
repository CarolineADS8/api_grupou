import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "tarefa";

const sequelize = getConnection();

const Tarefa = sequelize.define(
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

Tarefa.associate = (models) => {
  Tarefa.belongsTo(models.aluno, {
    foreignKey: { name: "id_aluno" },
    as: "aluno",
  });
  Tarefa.belongsTo(models.grupo, {
    foreignKey: { name: "id_grupo" },
    as: "grupo",
  });
};

module.exports = Tarefa;
