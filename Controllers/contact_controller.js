const Contact = require("../models/Contact_models");

const contactForm = async (req,res) => {
    try {
        const response = req.body;
        await Contact.create(response)
        return res.status(200).json({ "message": req.body } )
    } catch (error) {
        // return res.status(500).json("The contact has been done ");
        next(error)
        
    }
}


module.exports = contactForm;