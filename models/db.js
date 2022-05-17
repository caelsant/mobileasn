var Sequelize = require("sequelize");

var banco = new Sequelize(
    "mobileasn",
    "admin",
    "66325489",
    {
        host: "localhost",
        dialect: "mysql",
        define: { timestamps: false }
    }
)

banco.authenticate().then(
    function(){
        console.log("Conectou com o db sucesso")
    }
).catch(
    () => {
        console.log("Nao conseguiu se conectar");
    }
)

module.exports = {
    db: banco,
    Sequelize: Sequelize
}