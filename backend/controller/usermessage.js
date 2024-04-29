exports.submitUserMessage = async (req, res) => {
    try {
        let UserMessage = new UserMessage({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        const savedUserMessage = await
        UserMessage.save();

        sendEmail({
            from: "noreply@something.com",
            to: req.body.email,
            subject: "User Message Email",
            text: `user message:\n Name: ${UserMessage.name}\n 
                     Email: ${UserMessage.email}\n 
                     message: ${UserMessage.message}`
        })

        res.status(200).json({
            success: true,
            data: savedUserMessage
        });
    }
    catch (error) {
        console.erroe("error in sending message:", error);
        res.status(400).json({success:false, error: error.message});
    }
}