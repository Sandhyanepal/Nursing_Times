// const usermessage = require('../models/usermessage');
const Usermessage = require('../models/usermessage');
const sendEmail = require('../utils/emailSender');


exports.submitUserMessage = async (req, res) => {
    try {
        let usermessage = new Usermessage({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        const savedUserMessage = await
            usermessage.save();

        sendEmail({
            from: "noreply@something.com",
            to: req.body.email,
            subject: "User Message Email",
            text: `user message:\n Name: ${usermessage.name}\n 
                     Email: ${usermessage.email}\n 
                     message: ${usermessage.message}`
        })

        res.status(200).json({
            success: true,
            data: savedUserMessage
        });
    }
    catch (error) {
        console.error("error in sending message:", error);
        res.status(400).json({ success: false, error: error.message });
    }
}

//get all messages
exports.getAllMessage = async (req, res) => {
    let message = await Usermessage.find();
    if (!message) {
        return res.status(400).json({ error: "No message found." })
    }
    res.send(message);
}
