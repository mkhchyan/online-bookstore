import { RegisterRoutes } from '../.tsoa/routes'
import { UserController } from './controllers/UserController'
import helmet from 'helmet'
import morgan from 'morgan'

const express = require("express")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express')

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(helmet()) // hide server informations for security
app.use(morgan('tiny')) // logs http requests

// Swagger
// eslint-disable-next-line import/no-named-as-default-member
app.use(express.static('public'))
app.use(
    '/api',
    // eslint-disable-next-line import/no-named-as-default-member
    swaggerUi.serve,
    // eslint-disable-next-line import/no-named-as-default-member
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        },
    })
)

// register tsoa routes
RegisterRoutes(app)


app.post('/users', UserController);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})