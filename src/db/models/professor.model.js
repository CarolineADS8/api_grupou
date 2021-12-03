import { DataTypes } from "sequelize";
import { getConnection } from "../index";

const tableName = "professor";

const sequelize = getConnection();

const Professor = sequelize.define(
  tableName,
  {
    matricula: {
      type: DataTypes.STRING(10),
    },
  },
  { sequelize, tableName, timestamps: false }
);

Professor.associate = (models) => {
  Professor.belongsTo(models.usuario, {
    foreignKey: {
      name: "id_usuario",
    },
    as: "usuario",
  });

  Professor.belongsToMany(models.turma, {
    through: "professor_turma",
    timestamps: false,
    foreignKey: {
      name: "id_professor",
    },
    as: "turmas",
  });

  Professor.belongsToMany(models.disciplina, {
    through: "professor_disciplina",
    timestamps: false,
    foreignKey: {
      name: "id_professor",
    },
    as: "disciplinas",
  });
};

module.exports = Professor;
