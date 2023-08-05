import express from 'express'
import { checkToken, checkTeacherToken } from '../middlewares/checktoken.js'
import homework from '../controller/homework.js'
const app = express()
const { GET_HOMEWORK, POST_HOMEWORK, PUT_HOMEWORK, DELETE_HOMEWORK } = homework

app.get('/homework', GET_HOMEWORK)
app.get("/homework/:id", GET_HOMEWORK)
app.post("/homework", checkTeacherToken, POST_HOMEWORK)
app.put('/homework/:id', checkTeacherToken, PUT_HOMEWORK)
app.delete('/homework/:id', checkTeacherToken, DELETE_HOMEWORK)

export default app