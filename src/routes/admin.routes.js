import admin from "../controller/admin.js";
import express from 'express'
const app = express()
const { LOGIN_ADMIN } = admin
app.post('/admin/login', LOGIN_ADMIN)
export default app