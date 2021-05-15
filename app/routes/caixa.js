module.exports = (application)=>{
    application.post('/caixa',(req,res)=>{
        application.app.controllers.caixa.iniciaCaixa(application,req,res);
    })


    application.get('/caixa',(req,res)=>{
        application.app.controllers.caixa.iniciaCaixa(application,req,res);
    })
    
}