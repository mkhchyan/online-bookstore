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
    apis: ['path/to/your/api/routes/*.js'] // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
