import express from 'express'
import absenceReason from '../controller/absenceReason.js'
import { checkAllToken, checkTeacherToken, checkToken } from '../middlewares/checktoken.js'
const app = express()
const { GET_REASONS, POST_REASONS, PUT_REASONS, DELETE_REASONS } = absenceReason
app.get('/absence-reason', GET_REASONS)
app.get('/absence-reason/:id', GET_REASONS)
app.post('/absence-reason', checkAllToken,POST_REASONS)
app.put('/absence-reason/:id', checkAllToken,PUT_REASONS)
app.delete('/absence-reason/:id', checkAllToken,DELETE_REASONS)
export default app