import jwt from "../utils/jsonwebtoken.js"
import teachers from "../models/teachersModel.js"
import students from "../models/studentsModel.js"
import adminSchema from '../schemas/adminSchema.js'
const { SIGN, VERIFY } = jwt
export default {
    TOKEN_VERIFY: async (req, res) => {
        try{
const { token } = req.headers
let route = ''
if((await VERIFY(token)).id){
    if(await students.get((await VERIFY(token)).id)) {route = '/student-cabinet'}
    else if(await teachers.get((await VERIFY(token)).id)) {route = '/teacher-cabinet/home'}
    else throw new Error("The token has expired, please go and login!")
    return res.send({status: 200, id: (await VERIFY(token)).id, route})
}
else throw new Error("The token has expired")
        }catch(err){
            return res.send({status: 404, error: err.message})
        }
    },
    ADMIN_TOKEN_VERIFY: async (req, res) => {
        try{
            const { token } = req.headers
            if((await VERIFY(token)).id){
                if(await adminSchema.get((await VERIFY(token)).id)) return res.send({status:200, data: 'The token has been verified'})
            }
            else throw new Error('The token does not belong to the admin')
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}