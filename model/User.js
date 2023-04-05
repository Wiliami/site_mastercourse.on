const db = require('./db');


const User = db.sequelize.define('users', {
  // Model attributes are defined here
  userName: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Por favor, insira seu nome'
      }
    }
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



module.exports = User;
// Users.sync({force: true}); 
// NameModel.sync({force: true});