var app = require('./config/server');

var abc = "abc";

var server = app.listen(80, function(){
    console.log("Sistema online")
})

var io = require('socket.io').listen(server); 

app.set('io',io);

io.on('connection', function(socket){ 
    console.log('Usuario conectou');
    
    socket.on('disconnect',function(){
        console.log('Usuario desconectou')
    })

})

io.on('msgParaServidor',function(data){
    socket.broadcast.emit('msgParaCliente',
    {apelido: data.apelido, mensagem: data.mensagem})
})
