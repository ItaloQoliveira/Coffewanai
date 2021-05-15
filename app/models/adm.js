const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdmSchema = new Schema({
    sanduiche:{
        qntd: {type: Number, required:true},
        valor: {type: Number, required:true}
    },
    bandeja:{
        qntd: {type: Number, required:true},
        valor: {type: Number, required:true}
    },
    onigiri:{
        qntd: {type: Number, required:true},
        valor: {type: Number, required:true}
    },
    refrigerante:{
        qntd: {type: Number, required:true},
        valor: {type: Number, required:true}
    },
    cha:{
        qntd: {type: Number, required:true},
        valor: {type: Number, required:true}
    },
    suco:{
        qntd: {type: Number, required:true},
        valor: {type: Number, required:true}
    },
    caixaVal: {type: Number, required:true}

})

module.exports = mongoose.model('Adm',AdmSchema);
// sempre que der require neste arquivo a variavel é o banco, basicamente.