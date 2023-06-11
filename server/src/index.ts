import { UserController } from "../controllers/UserController";

const express = require("express")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express')
const swagger = require('./swagger')

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.post('/users', UserController);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})