const Sequelize = require('sequelize');
const config = new Sequelize("task_manager_project", "root", "8350132", {dialect: 'mariadb'}); // databasename, username, password.dialect to mariadb
 
module.exports = config;