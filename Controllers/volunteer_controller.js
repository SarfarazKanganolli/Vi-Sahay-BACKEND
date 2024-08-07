const Volunteer = require("../models/volunteer_model")

const volunteerForm = async (req,res) => {
    try {
        const response = req.body;
        await Volunteer.create(response);
        return res.status(200).json({"Volunteer" : req.body })
    } catch (error) {
        // return res.status(500).json("The contact has not been done ");
        next(error)
    }
}

module.exports = volunteerForm;