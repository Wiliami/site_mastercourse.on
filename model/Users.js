const db = require('./db')
// const { DataTypes } = require("sequelize");

// const Users = db.sequelize.define('users', {
//     user_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     user_name: {
//         type: DataTypes.STRING
//     },
//     user_email: {
//         type: DataTypes.STRING
//     },
//     user_password: {
//         type: DataTypes.NUMBER
//     },
//     user_contact: {
//         type: DataTypes.NUMBER
//     }
// })

const Users = db.sequelize.define('users', {
  // Model attributes are defined here
  userName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  userEmail: {
    type: db.Sequelize.STRING,
    // allowNull: false
    // allowNull defaults to true
  },
  userPassword: {
    type: db.Sequelize.STRING,
    // allowNull: false
    // allowNull defaults to true
  }
},
);



module.exports = Users;
// Users.sync({force: true});