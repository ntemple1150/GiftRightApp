const Sequelize = require('sequelize');

const sequelize = new Sequelize('giftright', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(
    function(){
        console.log('Connected to the GR Log')
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;