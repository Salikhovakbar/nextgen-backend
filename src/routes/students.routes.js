import studentController from '../controller/students.js'
import { checkToken, avatar } from '../middlewares/checktoken.js'
import express from 'express'
const app = express()
const { GETALL_STUDENT,LOGIN_STUDENT,SIGNUP_STUDENT,
    PUT_STUDENT, DELETE_STUDENT
     } = studentController

app.get('/students', GETALL_STUDENT)
app.get('/students/:id', GETALL_STUDENT)
app.post('/students-login', LOGIN_STUDENT)
app.post("/students", checkToken, avatar,SIGNUP_STUDENT)
app.put('/students/:id', avatar,PUT_STUDENT)
app.delete('/students/:id', checkToken,DELETE_STUDENT)

export default app