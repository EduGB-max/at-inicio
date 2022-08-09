const mongoose = require ('mongoose')

const conexao  = async() => {

var atlas = await mongoose.connect('mongodb+srv://user1:2@fiaptecnico.zg8lq.mongodb.net/test')

}

module.exports = conexao