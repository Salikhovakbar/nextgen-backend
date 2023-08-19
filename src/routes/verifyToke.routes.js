import express from 'express'
import verifyContr from '../controller/verifyToken.js'
const app = express()
const { TOKEN_VERIFY } = verifyContr

app.get('/check-token', TOKEN_VERIFY)

export default app