const mongoose = require('mongoose')

const walletShchema = mongoose.Schema({
   user:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref: 'User'
   },
   name:String,
   walletNumber:{
       type:String,
       unique:true
   }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Wallet',walletShchema)