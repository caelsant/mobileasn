const { Sequelize } = require("./db.js");
const db = require("./db.js");

const User = db.db.define("produto",  {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.STRING
    },
     marca: {
        type: Sequelize.STRING
    },
     referencia: {
        type: Sequelize.STRING
    },
     quantidade: {
        type: Sequelize.DECIMAL
    },
     ean: {
        type: Sequelize.STRING
    },
     un: {
        type: Sequelize.STRING
    },
     custo: {
        type: Sequelize.DECIMAL
    },
     valorvenda: {
        type: Sequelize.DECIMAL
    },
     foto: {
        type: Sequelize.BLOB
    },
     tabeladeimpostodeentrada: {
        type: Sequelize.INTEGER
    },
     ncm: {
        type: Sequelize.STRING
    },
     desconto: {
        type: Sequelize.STRING
    },
     acrescimo: {
        type: Sequelize.STRING
    },
     vender_fracionado: {
        type: Sequelize.STRING
    },
     estoque_minimo: {
        type: Sequelize.DECIMAL
    },
     estoque_maximo: {
        type: Sequelize.DECIMAL
    },
     grupo: {
        type: Sequelize.INTEGER
    },
     subgrupo: {
        type: Sequelize.INTEGER
    },
     codigointerno: {
        type: Sequelize.STRING
    },
     ativo: {
        type: Sequelize.STRING
    },
     comissao: {
        type: Sequelize.STRING
    },
     alterarprecodevenda: {
        type: Sequelize.STRING
    },
     vendercomsaldonegativo: {
        type: Sequelize.STRING
    },
     tabeladeimpostodesaida: {
        type: Sequelize.INTEGER
    },
     cest: {
        type: Sequelize.STRING
    },
     tipo: {
        type: Sequelize.INTEGER
    },
     balanca: {
        type: Sequelize.STRING
    },
     FORNECEDOR: {
        type: Sequelize.INTEGER
    },
     usamateriaprimaadicional: {
        type: Sequelize.STRING
    },
     quantidadeatacado: {
        type: Sequelize.DECIMAL
    },
     precoatacado: {
        type: Sequelize.STRING
    },
     Margem_Aprazo: {
        type: Sequelize.DECIMAL
    },
     Valor_Aprazo: {
        type: Sequelize.STRING
    },
     Margem_Atacado: {
        type: Sequelize.DECIMAL
    },
     Valor_Atacado: {
        type: Sequelize.STRING
    },
     margem_av: {
        type: Sequelize.DECIMAL
    },
     datacadastro: {
        type: Sequelize.STRING
    },
     servico: {
        type: Sequelize.STRING
    },
     local: {
        type: Sequelize.STRING
    },
     quantidadefiscal: {
        type: Sequelize.DECIMAL
    },
     quantidadeporembalagem: {
        type: Sequelize.STRING
    },
     custofiscal: {
        type: Sequelize.DECIMAL
    },
     estoque_atual_lj01: {
        type: Sequelize.DECIMAL
    },
     mva: {
        type: Sequelize.DECIMAL
    },
     validadeemdias: {
        type: Sequelize.STRING
    },
     aliquotaibpt: {
        type: Sequelize.DECIMAL
    },
     codigoanp: {
        type: Sequelize.STRING
    },
     descricaoanp: {
        type: Sequelize.STRING
    },
     percentualglp: {
        type: Sequelize.DECIMAL
    },
     aliquotaibptfederal: {
        type: Sequelize.DECIMAL
    },
     tamanho: {
        type: Sequelize.STRING
    },
     customediofiscal: {
        type: Sequelize.DECIMAL
    },
     datavalidade: {
        type: Sequelize.DATE
    },
     percentual_pgni: {
        type: Sequelize.DECIMAL
    },
     percentual_pgnn: {
        type: Sequelize.DECIMAL
    },
     tributado_pela_nuvem_asn: {
        type: Sequelize.STRING
    },
     valorvendafiscal: {
        type: Sequelize.DECIMAL
    }
}, {
    tableName: 'produto'
 })
 //Tabela Items
const Items = db.db.define("itensvenda_mobile", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    acrescimo: {
        type: Sequelize.DECIMAL
    },
    cst_csosn: {
        type: Sequelize.STRING
    },
    datavenda: {
        type: Sequelize.DATE
    },
    desconto: {
        type: Sequelize.DECIMAL
    },
    id_item: {
        type: Sequelize.INTEGER
    },
    id_venda: {
        type: Sequelize.INTEGER
    },
    impostoibtp: {
        type: Sequelize.DECIMAL
    },
    obs: {
        type: Sequelize.STRING
    },
    oe: {
        type: Sequelize.STRING
    },
    quantidade: {
        type: Sequelize.DECIMAL
    },
    sequencia: {
        type: Sequelize.STRING
    },
    servico: {
        type: Sequelize.STRING
    },
    situacao: {
        type: Sequelize.STRING
    },
    un: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DECIMAL
    },
    valorap: {
        type: Sequelize.DECIMAL
    },
    valortotal: {
        type: Sequelize.DECIMAL
    }

}, {
    tableName: 'itensvenda_mobile'
 })
//Tabela Cabecalho
const Head = db.db.define("cabecalhovendas_mobile", {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    chaveacessopedido: {
        type: Sequelize.STRING
    },
    datavenda: {
        type: Sequelize.DATE
    },
    desconto: {
        type: Sequelize.DECIMAL
    },
    empresa: {
        type: Sequelize.INTEGER
    },
    garcom: {
        type: Sequelize.INTEGER
    },
    hora: {
        type: Sequelize.TIME
    },
    id_cliente: {
        type: Sequelize.INTEGER
    },
    id_vendedor: {
        type: Sequelize.INTEGER
    },
    numero_nfce: {
        type: Sequelize.STRING
    },
    numero_nfe: {
        type: Sequelize.STRING
    },
    numero_os: {
        type: Sequelize.INTEGER
    },
    numerodocaixa: {
        type: Sequelize.STRING
    },
    obs: {
        type: Sequelize.STRING
    },
    operador: {
        type: Sequelize.STRING
    },
    placa: {
        type: Sequelize.STRING
    },
    prazo_entrega: {
        type: Sequelize.STRING
    },
    qrcodepedido: {
        type: Sequelize.STRING
    },
    situacao: {
        type: Sequelize.STRING
    },
    tipo_pagamento: {
        type: Sequelize.INTEGER
    },
    totalvenda: {
        type: Sequelize.DECIMAL
    }

}, {
    tableName: 'cabecalhovendas_mobile'
 })

module.exports = {
    usuarios: User,
    itens: Items,
    cabecalho: Head
};
