// mailer route for contact form
// allows for post request on given route
// verifies that data is correct and sends the email via mailgun

var express = require('express')
var mailgunConfig = {
  apiKey: 'key-f8f3443413428a6d0992e660b8e473f9',
  domain: 'sandboxffcc3b5a90f0467a8f94e980e47cbe80.mailgun.org'
};
var mailgun = require('mailgun-js')(mailgunConfig);

var router = express.Router()

router.post('/', function (req, res) {
  // Data should be in the following format
  // var data = {
  //   "from": 'User Name <test@test.com>',
  //   "text": 'Testing some Mailgun awesomness!'
  // };
  var data = req.body.data;
  if (!!data) {
    console.log(data);
    data.to = 'gregalexsmith@gmail.com';
    data.subject = 'Contact Form - gregalexsmith.com'
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      res.send(body)
    });
  } else {
    console.log("Error in Post Request")
    res.send("Error in Post Request")
  }
})

function verifyData(data) {
  if (!data) {
    return false;
  }
}

module.exports = router
