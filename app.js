const express = require('express'); // importando

const app = express(); // criando instancia express

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);

// app.use('/produtos',(req, res, next) => {
//     // req = request 
//     // res = resposta 
//    res.status(200).send({
//     mensagem : 'Ok, vc arrrasou tudo certo'
//    });
// });

module.exports = app;