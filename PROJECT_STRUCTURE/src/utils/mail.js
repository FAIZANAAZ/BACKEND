import Mailgen from "mailgen";
import nodemailer from "nodemailer";

//Send email function*************************
const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Project Management App",
      link: process.env.CLIENT_URL,
    },
  });
//email in text formate 
  const emailText= mailGenerator.generatePlaintext(options.mailgenContent)

  //email in html formate
  const emailBody = mailGenerator.generate(options.mailgenContent);

  // create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASSWORD,
    },
  });

  //definig email options
  const mail={
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml
  }
  //send email
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.log("Error sending email:", error);
  }
}


//Email verification template mailgen content*************************
const emailVerificationTemplate = (userName, verificationLink) => {
  return {
    body: {
      name: userName,
      intro: "Welcome to our Appi we are very excited to have you on board.",
      action: {
        instructions: "please click the button below to verify your account:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Confirm your account",
          link: verificationLink,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

//Reset password template mailgen content*************************
const forgetPasswordTemplate = (userName, PasswordResetLink) => {
  return {
    body: {
        name: userName,
        intro: "We have request to reset your password, please click the button below to process.",
        action: {
            instructions: 'Click the button below to reset your password:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Reset your password',
                link: PasswordResetLink,
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
  };
};

export { emailVerificationTemplate, forgetPasswordTemplate };