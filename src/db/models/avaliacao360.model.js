import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "avaliacao360";

const sequelize = getConnection();

const Avaliacao360 = sequelize.define(
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

Avaliacao360.associate = (models) => {
  Avaliacao360.belongsTo(models.aluno, {
    foreignKey: { name: "id_aluno" },
    as: "aluno",
  });

  Avaliacao360.belongsTo(models.atividadeAvaliativa, {
    foreignKey: { name: "id_atividadeAvaliativa" },
    as: "atividadeAvaliativa",
  });

  Avaliacao360.belongsTo(models.grupo, {
    foreignKey: { name: "id_grupo" },
    as: "grupo",
  });

  Avaliacao360.belongsToMany(models.softskill, {
    through: "avaliacao360_softskill",
    timestamps: false,
    foreignKey: {
      name: "id_avaliacao360",
    },
    as: "softskill",
  });
};

module.exports = Avaliacao360;
