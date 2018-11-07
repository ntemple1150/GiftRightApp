var router = require('express').Router();
var Sequelize = require('../db');
var User = Sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/create', (req,res) => {
    User.create({
    username: req.body.user.username,
    password: bcrypt.hashSync(req.body.user.password, 10),
    email: req.body.user.email,
    groupID: req.body.user.groupID,
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError = err => res.status(500).send(err)
    )
});

router.post('/login', function(req, res) {
  User.findOne( { where: { username: req.body.user.username }})
  .then(
   function(user) {
      if(user) {
      bcrypt.compare(req.body.user.password, user.password, function(err, matches) {
           console.log("the value matches", matches)
      if(matches) {
          var token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
              res.json({
                  user: user,
                  message: "you logged in",
                  sessionToken: token
              });
          } else {
          res.status(502).send({error: "failed to authenticate"});
          }
      })
  } else {
      res.status(500).send({error: "server error"})
      }   
  },
  function(err) {
      res.status(501).send({ error: "even bigger server error"})
  })
})


  router.put('/:id', (req, res) => {
    if (!req.errors) {
      User.update(req.body.user, { where: { id: req.params.id }})
        .then(user => res.status(200).json(user))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
      }
    });

  
  router.delete('/:id', (req, res) => {
    if (!req.errors) {
      User.destroy({ where: { id: req.params.id }})
        .then(user => res.status(200).json(user))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })

module.exports = router;

