const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "secret",
    database: "teste-dominando-nodejs",
    define: {
        timestamp: true, //cria as colunas -> createdAt e updatedAt
        underscored: true, //transforma em não camelCase
        underscoredAll: true,
    },
};