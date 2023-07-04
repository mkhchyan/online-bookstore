const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'Documentation for My API'
        },
        basePath: '/'
    },
    apis: ['/routes/*.js,*.ts']
};

const specs = swaggerJsdoc(options);

module.exports = specs;
