import groupsController from "../controller/groups.js";
import express from 'express'
import { checkToken } from "../middlewares/checktoken.js";
const app = express()
const {GET_GROUPS, POST_GROUPS, PUT_GROUPS, DELETE_GROUPS } = groupsController
app.get('/groups', GET_GROUPS)
app.get('/groups/:id', GET_GROUPS)
app.post('/groups', checkToken, POST_GROUPS)
app.put('/groups/:id', checkToken, PUT_GROUPS)
app.delete('/groups/:id', checkToken, DELETE_GROUPS)

export default app