const {Schema , model} = require("mongoose");

const VolunteerSchema = new Schema({
    name:{
        type: String,
        require: true,
    },

    email:{
        type: String,
        require: true,
    },

    message:{
        type: String,
        require : true,
    },


})

const Volunteer = new model("Volunteer",VolunteerSchema);
module.exports = Volunteer;