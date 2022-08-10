//conexão com o banco de dados
const mongoose = require('mongoose')

class Connection {
    constructor(){
        this.dataBaseConnectionMongoDB()

    }
    dataBaseConnectionMongoDB(){
        this.mongoDBConnection = mongoose.connect('mongodb://localhost/nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

    })
    .then(()=>{
        console.log('Conexão ok')
    })
    .catch((error)=>{
        console.log(`Erro: ${error}`)
    })
}}
module.exports = new Connection()