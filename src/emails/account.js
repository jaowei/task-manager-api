const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jaowei.8@gmail.com',
        subject: 'Thank you for signing up!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jaowei.8@gmail.com',
        subject: 'Your cancellation is confirmed',
        text: `We are sorry to see you go, ${name}. Let us know what we could have done better to keep you onboard.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}