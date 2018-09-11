// mailer route for contact form
// allows for post request on given route
// verifies that data is correct and sends the email via mailgun
var functions = require('firebase-functions');
var router = require('express').Router()
var logError = require('./utils').logError;

var mailgunConfig = {
  apiKey: functions.config().mailgun.key,
  domain: functions.config().mailgun.domain
};
var mailgun = require('mailgun-js')(mailgunConfig);

/**
 * Contact form submit
 */
router.post('/', (req, res) => {
  var data = req.body;
  if (!(data && data.name && data.email && data.message)) {
    console.log("Error in Post Request");
    res.status(400).send('Error in Post Request!');
    return;
  }

  console.log("New Request")
  console.log(JSON.stringify(data));

  const mailGunData = {
    to: 'gregalexsmith@gmail.com',
    subject: 'Contact Form - gregalexsmith.com',
    from: data.name + "<" + data.email + ">",
    text: data.message
  }

  mailgun.messages().send(mailGunData, (error, body) => {
    if (error) {
      logError(error);
      res.status(500).send('Mailgun error');
      return;
    }
    console.log("Mailgun success: ", body);
    res.status(200).send("success")
  });

})

module.exports = router
