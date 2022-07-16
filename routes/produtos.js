const express = require('express');

const router = express.Router();

//retorna apenas all
router.get('/',(req,res,next) => {
    res.status(200).send({
        mensagem : 'usando GET dentro da rota de produtos'
    });
});

// inserindo
router.post('/',(req,res,next) => {
    res.status(200).send({
        mensagem : 'usando POST dentro da rota de produtos'
    });
});

//retorna apenas um 
router.get('/:id_produto',(req,res,next) => {
    const id = req.params.id_produto

    if(id == 'especial'){
        res.status(200).send({
            mensagem : 'você encontrou id especial',
            id_pedido: id,
            teste: 'Nodemon'
        });
    }else{
        res.status(200).send({
            mensagem : 'Passou id comum '
        });
    }
});

router.patch('/',(req,res,next) => {
    res.status(201).send({
        mensagem : 'usando PATCH dentro da rota de produtos'
    });
});

router.delete('/',(req,res,next) => {
    res.status(201).send({
        mensagem : 'usando DELETE dentro da rota de produtos'
    });
});

module.exports = router;