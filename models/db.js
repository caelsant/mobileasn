var Sequelize = require("sequelize");

var banco = new Sequelize(
    "mobileasn",
    "admin",
    "66325489",
    {
        host: "ejs-db-2.c1c2ntdfepv4.sa-east-1.rds.amazonaws.com",
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