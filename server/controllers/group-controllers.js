var router = require('express').Router();
var Sequelize = require('../db');
var User = Sequelize.import('../models/user');
var groupID = Sequelize.import('../models/group')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.put('/join', (req,res) => {
    User.update({
    groupID: req.body.user.groupID
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

            res.json({
                user: user,
                message: 'group joined',
                sessionToken: token
            })
        },
        createError = err => res.status(500).send(err)
    )
});



module.exports = router;