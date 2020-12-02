const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'abdifatah952@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. LEt me know how you get along with the app.`,
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'abdifatah952@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. Is there anything we could have done to help?`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
}
