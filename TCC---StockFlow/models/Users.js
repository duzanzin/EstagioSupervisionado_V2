const Sequelize = require('sequelize');
const database = require ('./database');

const User = database.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passwordConfirmation: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

User.sync();

module.exports = User;