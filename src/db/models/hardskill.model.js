import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "hardskill";

const sequelize = getConnection();

const HardSkill = sequelize.define(
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

HardSkill.associate = (models) => {
  HardSkill.belongsToMany(models.aluno, {
    through: "aluno_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_hardskill",
    },
    as: "alunos",
  });

  HardSkill.hasMany(models.questao, {
    foreignKey: { name: "id_questao" },
    as: "questoes",
  });

  HardSkill.belongsToMany(models.disciplina, {
    through: "disciplina_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_hardskill",
    },
    as: "disciplinas",
  });

  HardSkill.belongsToMany(models.atividadeAvaliativa, {
    through: "atividadeAvaliativa_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_hardskill",
    },
    as: "atividadeAvaliativa",
  });

  HardSkill.belongsToMany(models.turma, {
    through: "turma_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_hardskill",
    },
    as: "turmas",
  });
};

module.exports = HardSkill;
