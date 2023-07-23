const Sequelize = require('sequelize');
const config = require('./../config');

const Task = config.define('task',{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: true
	},
	description: {
		type: Sequelize.STRING,
		allowNull: true
	},
	category: {
		type: Sequelize.STRING,
		allowNull: true
	},
	task_date: {
		type: Sequelize.STRING,
		allowNull: true
	},
	priority_level: {
		type: Sequelize.STRING,
		allowNull: true
	},
	progress_level: {
		type: Sequelize.STRING,
		allowNull: true
	}
}, {timestamps: false});

module.exports = Task;