import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "disciplina";

const sequelize = getConnection();

const Disciplina = sequelize.define(
  tableName,
  {
    nome: {
      type: DataTypes.STRING(50),
    },
  },
  { sequelize, tableName, timestamps: false }
);

Disciplina.associate = (models) => {
  Disciplina.belongsToMany(models.professor, {
    through: "professor_disciplina",
    timestamps: false,
    foreignKey: {
      name: "id_disciplina",
    },
    as: "professores",
  });

  Disciplina.hasMany(models.turma, {
    foreignKey: { name: "id_turma" },
    as: "turmas",
  });

  Disciplina.belongsToMany(models.hardskill, {
    through: "disciplina_hardskill",
    timestamps: false,
    foreignKey: {
      name: "id_disciplina",
    },
    as: "hardskills",
  });
};

module.exports = Disciplina;
