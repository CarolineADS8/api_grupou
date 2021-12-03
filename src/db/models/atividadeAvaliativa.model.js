import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "atividadeAvaliativa";

const sequelize = getConnection();

const AtividadeAvaliativa = sequelize.define(
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

AtividadeAvaliativa.associate = (models) => {
  AtividadeAvaliativa.belongsTo(models.turma, {
    foreignKey: { name: "id_turma" },
    as: "turma",
  });

  AtividadeAvaliativa.belongsToMany(models.hardskill, {
    through: "atividadeAvaliativa_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_atividadeAvaliativa",
    },
    as: "hardskills",
  });

  AtividadeAvaliativa.hasMany(models.avaliacao360, {
    foreignKey: { name: "id_atividadeAvaliativa" },
    as: "avaliacao360",
  });

  AtividadeAvaliativa.hasMany(models.grupo, {
    foreignKey: { name: "id_atividadeAvaliativa" },
    as: "grupo",
  });
};

module.exports = AtividadeAvaliativa;
