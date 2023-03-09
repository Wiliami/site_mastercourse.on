const db = require('./db')
const { DataTypes } = require("sequelize");

const Users = db.sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
    },
    user_email: {
        type: DataTypes.STRING
    },
    user_password: {
        type: DataTypes.NUMBER
    },
    user_contact: {
        type: DataTypes.NUMBER
    }
    // user_id: {
    //     type: db.Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    // user_name: {
    //     type: db.Sequelize.STRING,
    //     type: DataTypes.STRING
    // },
    // user_email: {
    //     type: db.Sequelize.STRING
    // },
    // user_password: {
    //     type: db.Sequelize.VARCHAR
    // },
    // user_contact: {
    //     type: db.Sequelize.NUMBER
    // },
})

module.exports = Users;
// Users.sync({force: true});