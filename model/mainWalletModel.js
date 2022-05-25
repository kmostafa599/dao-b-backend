const mongoose = require('mongoose')

//wallet schema
const walletSchema = mongoose.Schema({
    _id:String,
    name:String,
    walletNumber:String,
})


module.exports = mongoose.model('MainWallet',walletSchema)