module.exports = (application)=>{
    application.post('/venda',(req,res)=>{
        application.app.controllers.venda.iniciaVenda(application,req,res);
    })


    application.get('/venda',(req,res)=>{
        application.app.controllers.venda.iniciaVenda(application,req,res);
    })
    
}