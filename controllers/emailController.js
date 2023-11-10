// controllers/emailController.js
const Email = require('../models/emailModel');

const sendEmailController = async (req, res) => {
    try {
        const info = await Email.sendEmail(req.body);
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error occurred: ', error);
        res.status(500).send('Error sending email');
    }
};

module.exports = { sendEmailController };

