const cors = require("cors");
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const db = require("./models/db");
const tables = require("./models/tables")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Require da conexão com o banco de dados
//EJS e a ViewEngine do projeto
const ejs = require("ejs");

    app.set("view engine", "ejs");
    app.set('views', './views');
//Configurações do EJS ^^^
//Executar JSON
    app.use(express.json())
	app.use(cors())
    app.use(express.static('public'));
//ROTAS
app.get("/login", (req,res) => {

    res.render("login", {not: ""})
	
})

app.post("/notlogin", async (req, res) => {
	var usuario = req.body.usuario;
	var senha = req.body.senha;

	const findUsuario = await tables.usuarios.findOne({ where: { nome: usuario } });
	const findId = await tables.usuarios.findOne({ where: { codigo: usuario } });
	if(findUsuario === null){
		res.render("login", {not: "Usuario ou Senha incorretos, tente novamente"})
	}else{
		if((findUsuario.nome == usuario) && (findUsuario.senha == senha)){
			res.redirect(307, "/user")
		}else{
			res.render("login", {not: "Usuario ou Senha incorretos, tente novamente"})
		}
	}
})

app.post("/user", (req,res) => {
	var usuario = req.body.usuario;
    res.render("usuario", {user: usuario})
})

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/barras", (req,res) => {
    res.render("barras")
})

app.post("cadastrar/itens", (req,res) => {
    tables.itens.create({
		"id": req.body.id,
		"acrescimo": req.body.acrescimo,
		"cst_csosn": req.body.cst_csosn,
		"datavenda": req.body.datavenda,
		"desconto": req.body.desconto,
		"id_item": req.body.id_item,
		"id_venda": req.body.id_venda,
		"impostoibtp": req.body.impostoibtp,
		"obs": req.body.obs,
		"oe": req.body.oe,
		"quantidade": req.body.quantidade,
		"sequencia": req.body.sequencia,
		"servico": req.body.servico,
		"situacao": req.body.situacao,
		"un": req.body.un,
		"valor": req.body.valor,
		"valorap": req.body.valorap,
		"valortotal": req.body.valortotal
    
    }
    ).then(
        res.send("Cadastrado")
    ).catch(
        res.send("Erro no Cadastramento")
    )
})

app.post("cadastrar/cabecalho", (req,res) => {
    tables.cabecalho.create({
		"codigo": req.body.codigo,
		"chaveacessopedido": req.body.chaveacessopedido,
		"datavenda": req.body.datavenda,
		"desconto": req.body.desconto,
		"empresa": req.body.empresa,
		"garcom": req.body.garcom,
		"hora": req.body.hora,
		"id_cliente": req.body.id_cliente,
		"id_vendedor": req.body.id_vendedor,
		"numero_nfce": req.body.numero_nfce,
		"numero_nfe": req.body.numero_nfe,
		"numero_os": req.body.numero_os,
		"numerodocaixa": req.body.numerodocaixa,
		"obs": req.body.obs,
		"operador": req.body.operador,
		"placa": req.body.placa,
		"prazo_entrega": req.body.prazo_entrega,
		"qrcodepedido": req.body.qrcodepedido,
		"situacao": req.body.situacao,
		"tipo_pagamento": req.body.tipo_pagamento,
		"totalvenda": req.body.totalvenda
    }
    ).then(
        res.send("Cadastrado")
    ).catch(
        res.send("Erro no Cadastramento")
    )
})

app.get("/end", (req,res) => {
    res.render("finish")
})


//API

app.get("/api/vendedores", (req, res) => {
    tables.usuarios.findAll().then((element) => {
        res.json(element)
    })
})

app.get("/api/produtos", (req, res) => {
    tables.produtos.findAll().then((element) => {
        res.json(element)
    })
})

app.get("/api/itens", (req, res) => {
    tables.itens.findAll().then((element) => {
        res.json(element)
    })
})

app.get("/api/cabecalho", (req, res) => {
    tables.cabecalho.findAll().then((element) => {
        res.json(element)
    })
})


app.listen(9091, () => {
	console.log("Conectado: 9091" );
})