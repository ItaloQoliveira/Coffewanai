const VendaModel = require('../../app/models/venda');
const express = require('express')
const router = express.Router();

router.post('/', (req, res) => { //função post para adicionar documento adm

    try {
        const venda = VendaModel.create(req.body); //cria documento no db com base no body do post
        return res.status(201).send(venda);
    }
    catch (err) {
        if (err) {
            return res.status(500).send({ error: 'Erro ao cadastrar documento de venda' });
        }
    }
    
})
router.get('/vendas', async (req, res) => { //Metodo get para retornar todos documentos venda
    const vendas = await VendaModel.find({});
    
    
    res.send(vendas)
})

module.exports = router;