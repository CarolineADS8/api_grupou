import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "softskill";

const sequelize = getConnection();

const Softskill = sequelize.define(
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

Softskill.associate = (models) => {
  Softskill.belongsToMany(models.aluno, {
    through: "aluno_softskill",
    timestamps: false,
    foreignKey: {
      name: "id_softskill",
    },
    as: "alunos",
  });

  Softskill.belongsToMany(models.avaliacao360, {
    through: "avaliacao360_softskill",
    timestamps: false,
    foreignKey: {
      name: "id_softskill",
    },
    as: "softskill",
  });
};

module.exports = Softskill;
