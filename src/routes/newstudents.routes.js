import studentController from '../controller/newstudents.js'
import { checkToken } from '../middlewares/checktoken.js'
import express from 'express'
const app = express()
const { DELETE_STUDENTS, GET_STUDENTS, POST_STUDENTS, PUT_STUDENTS} = studentController

app.get('/new/students', GET_STUDENTS)
app.get('/new/students/:id', GET_STUDENTS)
app.post("/new/students", POST_STUDENTS)
app.put('nex/students/:id', PUT_STUDENTS)
app.delete('/new/students/:id', DELETE_STUDENTS)

export default app