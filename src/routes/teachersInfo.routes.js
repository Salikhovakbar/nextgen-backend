import teachersController from '../controller/teachers-data.js'
import { avatar, checkToken } from '../middlewares/checktoken.js'
import express from 'express'
const app = express()
const { TEACHERS_GET, TEACHERS_POST, TEACHERS_PUT, TEACHERS_DELETE } = teachersController

app.get('/teachers', TEACHERS_GET)
app.get('/teachers/:id', TEACHERS_GET)
app.post("/teachers", checkToken,avatar,TEACHERS_POST)
app.put('/teachers/:id', checkToken,avatar,TEACHERS_PUT)
app.delete('/teachers/:id', TEACHERS_DELETE)

export default app