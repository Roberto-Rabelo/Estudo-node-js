const express = require('express'); // importando
const morgan = require('morgan');
const app = express(); // criando instancia express

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');
app.use(morgan('dev'));
app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);

app.use((req,res,next) => {
     const erro = new Error('Rotar não encontrada');
     erro.status = 404;
     next(erro);
});

app.use((error, req,res,next) => {
    // const erro = new Error('Rotar não encontrada');
    res.status(error.status || 500);
    return res.send({
        erro : {
            mensagem: error.message
        }
    });
   
});

module.exports = app;