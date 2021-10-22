var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form', { title: 'Add a Message'})
})

router.post('/new', function(req, res, next){
  messages.push({user: req.body.user, text: req.body.message, added: new Date()})
  res.redirect('/')
})

module.exports = router;
