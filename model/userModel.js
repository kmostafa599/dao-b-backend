const mongoose = require('mongoose')

const userShchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'Please add a name'],
    },
    email: {
        type: String,
        required:[true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
    },
    business: String,
    image: String,
    position: String,
    team: String,
    phone: String,
    city: String,
    address: String,
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User',userShchema)