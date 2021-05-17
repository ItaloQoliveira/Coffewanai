var express = require('express');
var consign = require('consign');
var mongoose = require('mongoose');
var bdurl = 'mongodb+srv://admin:admin54012@clusterapi.7jaeg.mongodb.net/Coffewanai?retryWrites=true&w=majority' //chave de conexão para o banco
const options = { useUnifiedTopology: true , poolSize: 5, useNewUrlParser: true,useCreateIndex: true};
mongoose.connect(bdurl,options); // Conexão com o banco de dados

//verificação de conexao com banco de dados
mongoose.connection.on('error', (err) =>{
    console.log(`Erro na conexão com o banco de dados: ${err} `);
}) 

mongoose.connection.on('connected',() =>{
    console.log("Conectado com sucesso ao banco de dados");
})

mongoose.connection.on('disconnected',() =>{
    console.log("aplicação desconectada do banco de dados");
})
 //criando o app
var app = express();

app.set('view engine', 'ejs');
app.set('views', "./app/views");

app.use(express.static('./app/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//rotas do banco de daods
const admRota = require('./rotas/adm');
const vendaRota = require('./rotas/venda')
app.use('/adm',admRota);
app.use('/venda',vendaRota);



 
consign()
    .include('./app/routes')
    // .then('./app/models')
    .then('./app/controllers')
    .into(app);


    
module.exports = app;