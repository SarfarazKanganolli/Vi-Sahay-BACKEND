require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_FROM_NUMBER= process.env.TWILIO_FROM_NUMBER;
const TO_NUMBER= process.env.TO_NUMBER;



const client = twilio(accountSid, authToken);


const sendSms = (message) => {
    
    client.messages.create({
         body: message,
         from: TWILIO_FROM_NUMBER,
         to: TO_NUMBER
       })
      .then(message => console.log(message.sid));
  }


module.exports = sendSms;



