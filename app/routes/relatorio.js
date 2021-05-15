module.exports = (application)=>{
    application.post('/relatorio',(req,res)=>{
        application.app.controllers.relatorio.iniciaRelatorio(application,req,res);
    })


    application.get('/relatorio',(req,res)=>{
        application.app.controllers.relatorio.iniciaRelatorio(application,req,res);
    })
    
}
