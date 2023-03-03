const db = require('./db')

const Users = db.sequelize.define('users', {
    user_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    user_name: {
        type: db.Sequelize.VARCHARU
    },
    user_email: {
        type: db.Sequelize.VARCHAR
    },
    user_password: {
        type: db.Sequelize.VARCHAR
    },
    user_contact: {
        type: db.Sequelize.NUMBER
    },
})

module.exports = Users;
Users.sync({force: true});