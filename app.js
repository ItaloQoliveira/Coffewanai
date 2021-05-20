var app = require('./config/server'); // a variável app é carregada


var server = app.listen(80, function(){ // agora a variavel app se conecta a uma das portas, nesse caso a 80
    console.log("Sistema online")
})



