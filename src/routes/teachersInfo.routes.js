import teachersController from '../controller/teachers-data.js'
import { avatar, checkToken } from '../middlewares/checktoken.js'
import express from 'express'
const app = express()
const { TEACHERS_GET, TEACHERS_POST, TEACHERS_PUT, TEACHERS_DELETE } = teachersController

app.get('/teachers-data', TEACHERS_GET)
app.get('/teachers-data/:id', TEACHERS_GET)
app.post("/teachers-data", checkToken,avatar,TEACHERS_POST)
app.put('/teachers-data/:id', checkToken,avatar,TEACHERS_PUT)
app.delete('/teachers-data/:id', TEACHERS_DELETE)

export default app