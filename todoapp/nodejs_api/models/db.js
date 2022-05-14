
module.exports.params = {
    dbname: process.env.MYSQL_ENV_MYSQL_DATABASE,
    username: process.env.MYSQL_ENV_MYSQL_USER,
    password: process.env.MYSQL_ENV_MYSQL_PASSWORD,
    params: {
        host: process.env.TODOAPP_MYSQL_SERVICE_NAME,
        port: process.env.TODOAPP_MYSQL_SERVICE_PORT
        dialect: 'mysql'
    }
};

