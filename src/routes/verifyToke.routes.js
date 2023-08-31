import express from 'express'
import verifyContr from '../controller/verifyToken.js'
const app = express()
const { TOKEN_VERIFY, ADMIN_TOKEN_VERIFY } = verifyContr

app.get('/check-token', TOKEN_VERIFY)
app.get('/check-admin-token', ADMIN_TOKEN_VERIFY)
export default app