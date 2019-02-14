let path = require('path');


// Cargar ORM
let Sequelize = require('sequelize');

//    DATABASE_URL = postgres://user:passwd@host:port/database

//despliegue
//let sequelize = new Sequelize('postgres://crm:1234@localhost:5432/gestiondocente');
//local
let sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/menusLaterales');
console.log('conecta');


// Importar la definicion de las tablas 
let menusLaterales = sequelize.import(path.join(__dirname, 'menusLaterales'));

sequelize.sync();

//Exportanimaanimalsamos modelos
exports.menusLaterales = menusLaterales; // exportar definición de tabla Profesor

