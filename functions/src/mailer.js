// mailer route for contact form
// allows for post request on given route
// verifies that data is correct and sends the email via mailgun

var router = require('express').Router()
var logError = require('./utils').logError;

var mailgunConfig = {
  apiKey: 'key-f8f3443413428a6d0992e660b8e473f9',
  domain: 'sandboxffcc3b5a90f0467a8f94e980e47cbe80.mailgun.org'
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
