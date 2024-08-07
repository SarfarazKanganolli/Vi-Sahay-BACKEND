const User = require('../models/user_models'); 
const sendSms = require('../Services/send_sms'); 

const MessageForm = async (req, res) => {
    const { name, phone_no, email, location, message } = req.body;

    if (!name || !phone_no || !email || !location || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const user = {
        name,
        phone_no,
        email,
        location,
        message
    };

    console.log('Received data:', user);

    try {
        const newUser = await User.create(user);


        const smsBody = 
        `New message from:
        Name: ${user.name}
        Phone Number: ${user.phone_no}
        Email: ${user.email}
        Location: ${user.location}
        Message: ${user.message}`;

        await sendSms(smsBody);

        res.status(201).json({
            message: 'Message sent and stored successfully!',
            data: newUser
        });
    } catch (error) {
        // console.error('Error:', error.message);
        // res.status(500).json({ message: 'Failed to send message or store data' });
        next(error)
    }
};

module.exports = MessageForm;
