var router = require('express').Router();
var Sequelize = require('../db');
var Gift = Sequelize.import('../models/gift');
const validateSession = require('../middleware/validate-session');

router.post('/add', validateSession, (req, res) => {
    if (!req.errors) {
      const giftFromRequest = {
        item: req.body.gift.item,
        link: req.body.gift.link,
        size: req.body.gift.size,
        description: req.body.gift.description,
      }
  
      Gift.create(giftFromRequest)
        .then(gift => res.status(200).json(gift))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })

module.exports = router;