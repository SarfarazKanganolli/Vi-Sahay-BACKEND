const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    phone_no:{
        type: String,
        require:true,

    },

    email:{
        type: String,
        require:true,

    },

    location:{
        type: String,
        require:true,


    },

    message:{
        type: String,
        require:true,

    }

}

)

const User = new mongoose.model("User" , userSchema);

module.exports = User;