const cors = require("cors");
const express = require("express");
const app = express();
const port = 9090;
const tabela = require("../models/tables")
//Require da conexão com o banco de dados
const db = require("../models/db");
//Executar JSON
    app.use(express.json())
    app.use(cors())
//ROTAS
app.get("/produtos", (req, res) => {
    tabela.usuarios.findAll().then((element) => {
        res.json(element)
    })
})

app.get("/itens", (req, res) => {
    tabela.itens.findAll().then((element) => {
        res.json(element)
    })
})

app.get("/cabecalho", (req, res) => {
    tabela.cabecalho.findAll().then((element) => {
        res.json(element)
    })
})


app.listen(port)