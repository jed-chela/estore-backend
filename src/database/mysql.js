const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT, DB_SSL } = require('../../config');

let dialect_options = {};
if(DB_SSL == 'true'){
    dialect_options = {
        port: DB_PORT,
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

console.log(DB_HOST);
try{
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: dialect_options,
    // disable logging; default: console.log
    logging: false
});

sequelize.sync().then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.error('Error connecting to database:', error);
});


module.exports = sequelize;
}catch(error){
    console.error(error);
}