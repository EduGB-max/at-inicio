
module.exports = (app) => {

    app.get('/', (req,res) => {
    
    res.render("sobre.ejs")
    
    })

    app.post('/', (req,res) => {

        var conexao = require ('../config/database')
        conexao()
        
        })
        
        
        }

