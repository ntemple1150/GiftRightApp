require('dotenv').config();

var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
var user = require('./controllers/user-controllers');
var groupID = require('./controllers/group-controllers');
var gift = require('./controllers/gift-controllers')



sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/header'))

app.use('/api/user', user);
app.use('/api/group', groupID);
app.use('/api/gift', gift)

app.use(require('./middleware/validate-session'))


app.listen(3000, function() {
    console.log('GiftRight Server is listening on 3000');
 })

