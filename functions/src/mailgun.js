var api_key = 'key-f8f3443413428a6d0992e660b8e473f9';
var domain = 'sandboxffcc3b5a90f0467a8f94e980e47cbe80.mailgun.org';

var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Excited User <test@test.com>',
  to: 'gregalexsmith@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});
