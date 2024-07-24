const Email = require("../util/email");

exports.sendEmail = async (req, res) => {
  try {
    const {
      subject,
      body,
      footer,
      emailFrom,
      emailTo,
      company,
      password,
      intro,
    } = req.body;

    console.log(emailFrom, password);

    for (const email of emailTo) {
      await new Email(
        subject,
        body,
        footer,
        emailFrom,
        email,
        company,
        password,
        intro
      ).send();
    }

    res.status(200).json({
      status: "success",
      message: `Emails sent successfully`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};