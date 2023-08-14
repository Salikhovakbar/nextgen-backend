import path from 'path'
import jwt from '../utils/jsonwebtoken.js'
import adminSchema from '../schemas/adminSchema.js'
import teachers from '../models/teachersModel.js'
const { VERIFY } = jwt
const hosting = 'http://localhost:5000'
export const checkTeacherToken = async (req, res, next) => {
    try {
        const { token } = req.headers
        if(await teachers.get((await VERIFY(token)).id)) return next()
        else throw new Error("Your token has expired, please go to registration page")
    } catch (err) {
     return res.send({error: err.message, status: 404})   
    }
}
export const checkToken = async (req, res, next) => {
    try {
        const { token } = req.headers
        if(await adminSchema.findById((await VERIFY(token)).id)) return next()
        else throw new Error("Your token has expired, please go to registration page")
    } catch (err) {
     return res.send({error: err.message, status: 404})   
    }
}
export const checkAllToken = async (req, res, next) => {
    try {
        const { token } = req.headers
        if(await teachers.get((await VERIFY(token)).id)) return next()
        else if(await teachers.get((await VERIFY(token)).id)) return next()
        else throw new Error("Your token has expired, please go to registration page")
    } catch (err) {
     return res.send({error: err.message, status: 404})   
    }
}
export const avatar = async (req, res, next) => {
if(req.method == 'POST'){
    if(req.files){    
const file = req.files.avatar
let { name } = file
const random = Math.floor(Math.random() * 9000 + 1000)
let mimetype = file.name.split('.')
name = file.name.split('.')[0]
mimetype = mimetype[mimetype.length - 1]
const link =  '/images/' + name + random + '.' + mimetype
 file.mv(path.join(process.cwd(), 'public', 'images',name + random + '.' + mimetype))
req.body.imgLink = hosting + link
}
else {
 req.body.imgLink = hosting + '/images/user.png'
}}
else if(req.method == 'PUT'){
    if(req.files){    
        const file = req.files.avatar
        let { name } = file
        const random = Math.floor(Math.random() * 9000 + 1000)
        let mimetype = file.name.split('.')
        name = file.name.split('.')[0]
        mimetype = mimetype[mimetype.length - 1]
        const link =  '/images/' + name + random + '.' + mimetype
         file.mv(path.join(process.cwd(), 'public', 'images',name + random + '.' + mimetype))
        req.body.imgLink = hosting + link
        }   
}
return next()
}