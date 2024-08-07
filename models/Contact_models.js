const mongoose = require("mongoose");

const contactSchema = ({
    name: {
        type: String,
        require: true,
    },

    phone:{
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    message:{
        type: String,
        require: true,
    },
})   
const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;