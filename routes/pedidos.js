const express = require('express');

const router = express.Router();

//retorna apenas all
router.get('/',(req,res,next) => {
    res.status(200).send({
        mensagem : 'Buscando todos pedidos'
    });
});

// inserindo
router.post('/',(req,res,next) => {
    res.status(200).send({
        mensagem : 'usando POST pedidos'
    });
});

//retorna apenas um 
router.get('/:id_produto',(req,res,next) => {
    const id = req.params.id_produto

    if(id == 'especial'){
        res.status(200).send({
            mensagem : 'PEDIDO especial'
        });
    }else{
        res.status(200).send({
            mensagem : 'PEDIDO comum '
        });
    }

   
});

router.patch('/',(req,res,next) => {
    res.status(201).send({
        mensagem : 'usando PATCH dentro da rota de pedido'
    });
});

router.delete('/',(req,res,next) => {
    res.status(201).send({
        mensagem : 'usando DELETE pedidos'
    });
});

module.exports = router;