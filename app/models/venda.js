const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendaSchema = new Schema({


    "Produtos": { type: String, required: true },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    "Valor": { type: Number, required: true },
    "Data": { type: Date, default: Date.now }


})

module.exports = mongoose.model('Venda', VendaSchema);
// sempre que der require neste arquivo a variavel é o banco, basicamente.















































/*https://cdn.discordapp.com/attachments/640977213331734528/843250109042786355/awawawa.png*/