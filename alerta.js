const nodemailer = require("nodemailer");
require("dotenv").config();

async function enviarMail(text, email) {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_ALERT,
      pass: process.env.PASSWORD_ALERT,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ALERT,
    to: email,
    subject: "ALERTA DE BOLETOS DISPONIBLES",
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });
}

module.exports = enviarMail;
