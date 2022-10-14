const { Router } = require('express');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const countryCode = "+503";
const fromNumber = "+14057845283";

const messaggesPost = async (req, res) => {

    const body = req.body;
    const message = body.message;
    const toNumber = countryCode + body.toNumber;
    console.log(message);
    console.log(toNumber);

    try {

        await client.messages
            .create({ body: message, from: fromNumber, to: toNumber })
            .then(message => { console.log("Respuesta: " + message.sid) });

        res.json({
            msg: 'Mensaje enviado satisfactoriamente',
            body
        });

    } catch (error) {
        res.json({
            msg: 'Algo salió mal, intenta más tarde',
        });
    }

}

module.exports = { messaggesPost };