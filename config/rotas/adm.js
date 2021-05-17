const AdmModel = require('../../app/models/adm');
const express = require('express')
const router = express.Router();

router.post('/add', (req, res) => { //função post para adicionar documento adm

    try {
        const adm = AdmModel.create(req.body); //cria documento no db com base no body do post
        return res.status(201).send(adm);
    }
    catch (err) {
        if (err) {
            return res.status(500).send({ error: 'Erro ao cadastrar documento adm' });
        }
    }
 
})
router.get('/', async (req, res) => { //Metodo get na raiz de adm causa retorno de estoque
    const adm = await AdmModel.find({});
    var data = [adm[0].sanduiche.qntd,
    adm[0].cha.qntd,
    adm[0].onigiri.qntd,
    adm[0].refrigerante.qntd,
    adm[0].bandeja.qntd,
    adm[0].suco.qntd]
    res.send(data)
})
router.post('/update', async(req, res) => { // metodo post para atualizar as quantias em estoque
    
    try {
        const adm = await AdmModel.findOne();
        
        adm.sanduiche.qntd = req.body.prodqnt[0]
        adm.cha.qntd = req.body.prodqnt[1]
        adm.onigiri.qntd = req.body.prodqnt[2]
        adm.refrigerante.qntd = req.body.prodqnt[3]
        adm.bandeja.qntd = req.body.prodqnt[4]
        adm.suco.qntd = req.body.prodqnt[5]
        await adm.save();
    }
    catch (err) {
        if (err) {
            return res.status(500).send({ error: 'Erro ao update  documento adm' });
        }
    }

})
module.exports = router;
