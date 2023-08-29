import testController from '../controller/test.js'
import { checkToken } from '../middlewares/checktoken.js'
import express from 'express'
const app = express()
const { GET_TESTS, POST_TESTS, PUT_TESTS, DELETE_TESTS } = testController
app.get('/test', checkToken,GET_TESTS)
app.get('/test/:id', checkToken,GET_TESTS)
app.post('/test', checkToken,POST_TESTS)
app.put('/test/:id', checkToken,PUT_TESTS)
app.delete("/test/:id", checkToken,DELETE_TESTS)

export default app