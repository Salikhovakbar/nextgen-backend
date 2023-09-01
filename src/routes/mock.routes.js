import express from 'express'
import mockController from '../controller/mock.js'
import { checkToken } from '../middlewares/checktoken.js'
const app = express()
const { GET_EXAMS, POST_EXAMS, PUT_EXAMS, DELETE_EXAMS } = mockController

app.get('/mock-exam', GET_EXAMS)
app.get('/mock-exam/:id', GET_EXAMS)
app.post('/mock-exam', POST_EXAMS)
app.put('/mock-exam/:id', checkToken,PUT_EXAMS)
app.delete('/mock-exam/:id', checkToken,DELETE_EXAMS)

export default app