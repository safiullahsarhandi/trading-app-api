const config = require('../Config/email');
const nodemailer = require("nodemailer");

var smtpConfiq = {
  service: config.service,
  port: config.port,
  auth: {
    user: config.mail_username,
    pass: config.mail_password,
  },
};

module.exports = {
  passwordResetMail: async (email, code) => {
    var transporter = nodemailer.createTransport(smtpConfiq);
    var mailOptions = {
      from: config.mail_from_address,
      to: email,
      subject: "CopyCat Trade | Password Reset",
      text: "",
      html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.
            \n\n Your verification code is ${code}:\n\n
            \n\n If you did not request this, please ignore this email and your password will remain unchanged.           
            </p>`,
    };
    let resp = await transporter.sendMail(mailOptions);
    return true;
  },
  send: async (email, subject, html) => {
    var transporter = nodemailer.createTransport(smtpConfiq);
    var mailOptions = {
      from: config.mail_from_address,
      to: email,
      subject,
      text: "",
      html,
    };
    let resp = await transporter.sendMail(mailOptions);
    return true;
  },
};