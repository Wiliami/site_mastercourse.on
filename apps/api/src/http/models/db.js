import Sequelize from 'sequelize';
const PASSWORD = 'xxtm18@chj282814jjx6015M';

const sequelize = new Sequelize("master_courses", "root", PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate()
.then(function() {
    console.log('A conexão com banco de dados foi realizada com sucesso!🔥🔥🔥');
}).catch(function() {
    console.log('Error: Houve um erro na conexão com o banco de dados!😭');
})


export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}