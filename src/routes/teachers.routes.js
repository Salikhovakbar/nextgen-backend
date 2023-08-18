import teachersController from '../controller/teachers.js'
import { checkToken, avatar } from '../middlewares/checktoken.js'
import express from 'express'
const app = express()
const { GETALL_TEACHER,LOGIN_TEACHER,SIGNUP_TEACHER,
    PUT_TEACHER, DELETE_TEACHER
     } = teachersController

app.get('/teachers', GETALL_TEACHER)
app.get('/teachers/:id', GETALL_TEACHER)
app.post('/teachers-login', LOGIN_TEACHER)
app.post("/teachers", checkToken,avatar,SIGNUP_TEACHER)
app.put('/teachers/:id', avatar,PUT_TEACHER)
app.delete('/teachers/:id', checkToken,DELETE_TEACHER)

export default app