const nodemailer = require("nodemailer");

const mailSender = async(email, title, body) =>{
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from:'Study Notion',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
        });

        // for seeing the info
        console.log(info);
        return info;
    } catch (error) {
        console.log("error in mailsender", error);
    }
};

module.exports = mailSender;