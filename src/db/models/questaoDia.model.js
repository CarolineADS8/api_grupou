import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "questaoDia";

const sequelize = getConnection();

const QuestaoDia = sequelize.define(
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

QuestaoDia.associate = (models) => {
  QuestaoDia.belongsTo(models.aluno, {
    foreignKey: { name: "id_aluno" },
    as: "aluno",
  });

  QuestaoDia.belongsTo(models.questao, {
    foreignKey: { name: "id_questao" },
    as: "questao",
  });
};

module.exports = QuestaoDia;
