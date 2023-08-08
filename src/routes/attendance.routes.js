import express from 'express'
import { checkToken, checkTeacherToken, checkAllToken } from '../middlewares/checktoken.js'
import attendance from '../controller/attendance.js'
const app = express()
const { GET_ATTENDANCE, POST_ATTENDANCE, PUT_ATTENDANCE } = attendance

app.get('/attendance', GET_ATTENDANCE)
app.get("/attendance/:id", GET_ATTENDANCE)
app.post("/attendance", checkAllToken, POST_ATTENDANCE)
app.put('/attendance/:id', checkAllToken, PUT_ATTENDANCE)

export default app