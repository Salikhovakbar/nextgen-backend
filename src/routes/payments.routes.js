import paymentController from '../controller/payment.js'
import express from 'express'
const app = express()
const {GET_PAYMENTS, POST_PAYMENTS, PUT_PAYMENTS, DELETE_PAYMENTS} = paymentController

app.get('/payments', GET_PAYMENTS)
app.get("/payments/:id", GET_PAYMENTS)
app.post('/payments', POST_PAYMENTS)
app.put("/payments/:id", PUT_PAYMENTS)
app.delete('/payments/:id', DELETE_PAYMENTS)

export default app