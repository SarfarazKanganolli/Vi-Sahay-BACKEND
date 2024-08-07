// test_twilio.js
require('dotenv').config();
const sendMessage = require('../Server/Services/send_sms'); // Adjust the path if needed

const testMessage = async () => {
    try {
        const response = await sendMessage('Hello from Twilio!', '+917045014150'); // Replace with a valid number
        console.log('Twilio response:', response);
    } catch (error) {
        console.error('Failed to send message:', error.message);
    }
};

testMessage();
