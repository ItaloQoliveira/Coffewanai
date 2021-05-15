module.exports = (application)=>{
    application.post('/estoque',(req,res)=>{
        application.app.controllers.estoque.iniciaEstoque(application,req,res);
    })


    application.get('/estoque',(req,res)=>{
        application.app.controllers.estoque.iniciaEstoque(application,req,res);
    })
    
}