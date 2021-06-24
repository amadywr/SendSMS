require('dotenv').config();
const twilio = require('twilio');

var client = new twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

client.messages.create({
    body: 'Message content',
    from: process.env.TWILIONUMBER,
    to: '+61400000000'
});