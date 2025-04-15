//swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Users',
            version: '1.0.0',
            description: 'API para gerenciamento de usuários e post',
        },
    },
    apis: ['./src/routes/*.js'], // <- Caminho das suas rotas
};

const swaggerSpec = swaggerJsDoc(options);
const setupSwagger = (app) => {
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

};

module.exports = setupSwagger;















