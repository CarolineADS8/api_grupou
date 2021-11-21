import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "questao";

const sequelize = getConnection();

const Questao = sequelize.define(
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

Questao.associate = (models) => {
  Questao.belongsTo(models.usuario, {
    foreignKey: { name: "id_usuario" },
    as: "usuario",
  });

  Questao.hasMany(models.questaoDia, {
    foreignKey: { name: "id_questao" },
    as: "questaoDia",
  });

  Questao.belongsTo(models.hardskill, {
    foreignKey: { name: "id_hardskill" },
    as: "hardskill",
  });
};

module.exports = Questao;
