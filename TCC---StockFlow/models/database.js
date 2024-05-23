const Sequelize = require('sequelize');

const sequelize = new Sequelize("teste", "root", "root",{
    host: 'localhost',
    dialect: 'mysql'
}  );

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(function(){
    console.log("Conexão com o banco de dados falhou!")
});

module.exports = sequelize;
