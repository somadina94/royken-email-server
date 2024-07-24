const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(
    subject,
    body,
    footer,
    emailFrom,
    emailTo,
    company,
    password,
    intro
  ) {
    this.subject = subject;
    this.body = body;
    this.footer = footer;
    this.from = `${company} <${emailFrom}>`;
    this.to = emailTo;
    this.password = password;
    this.intro = intro;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: this.from,
        pass: this.password,
      },
    });
  }

  async send() {
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: `${this.intro}\n${this.body}\n${this.footer}`,
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }
};
