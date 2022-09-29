require("dotenv").config()
 const nodemailer = require("nodemailer");

 (async function run(){
   console.log("running")
   const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER_EMAIL, // generated ethereal user
      pass: process.env.MAIL_USER_PASSWORD, // generated ethereal password
    },
  });
   await transporter.sendMail({
    from: process.env.Mail_FROM, // sender address
    to: process.env.MAIL_TO, // list of receivers
    subject: "Daily News", // Subject line
    text: `Daily News`, // plain text body
    html: `<h1>Daily News</h1>`, // html body
  });
 })();
// '"Sahil M" <sahiludemycourse1@gmail.com>'
