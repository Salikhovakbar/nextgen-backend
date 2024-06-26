import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import os from 'os'
import '../src/db/mongoose.js'
import students from '../src/routes/students.routes.js'
import teachers from '../src/routes/teachers.routes.js'
import admin from '../src/routes/admin.routes.js'
import groups from '../src/routes/groups.routes.js'
import attendance from '../src/routes/attendance.routes.js'
import homework from '../src/routes/homework.routes.js'
import newstudents from '../src/routes/newstudents.routes.js'
import fileUpload from 'express-fileupload'
import teacherData from '../src/routes/teachersInfo.routes.js'
import verifyToken from '../src/routes/verifyToke.routes.js'
import payments from '../src/routes/payments.routes.js'
import absenceReason from '../src/routes/absenceReason.routes.js'
import test from '../src/routes/test.routes.js'
import mock from '../src/routes/mock.routes.js'
import path from 'path'
const network = os.networkInterfaces()['Беспроводная сеть'][1].address
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(fileUpload())
app.use(cors("*"))
app.use(students)
app.use(newstudents)
app.use(admin)
app.use(teachers)
app.use(groups)
app.use(attendance)
app.use(homework)
app.use(teacherData)
app.use(verifyToken)
app.use(payments)
app.use(absenceReason)
app.use(test)
app.use(mock)
app.listen(PORT, () => {
    console.log(`The server http://${network}:${PORT} is working`)
})