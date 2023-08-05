import homeworks from '../models/homeworkModel.js'
import jwt from '../utils/jsonwebtoken.js'
const { VERIFY } = jwt
export default {
    GET_HOMEWORK: async (req, res) => {
        try{
const {id} = req.params
const foundHomework = await homeworks.get(id)
if(id && foundHomework) return res.send({status: 200, data: foundHomework})
if(id && !foundHomework) throw new Error("The homework does not exist") 
else if(!id) res.send({status: 200, data: await homeworks.get()})
}catch(err){
            return res.send({status:404, error:err.message})
        }
    },
    POST_HOMEWORK: async (req, res) => {
        try{
const { homework, group_id, date} = req.body
const { token } = req.headers
if(!homework || !group_id || !date) throw new Error("The data is not full")
else{
    req.body.teacher_id = (await VERIFY(token)).id
    await homeworks.post(req.body)
    return res.send({status: 200, data: 'The task has been created'})
}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    PUT_HOMEWORK: async (req, res) => {
        try{
const { id } = req.params
const { homework, teacher_id, group_id, date } = req.body
if(!homework && !teacher_id && !group_id && !date ) throw new Error("Please make changes")
else if(!(await homeworks.get(id))) throw new Error("The homework does not exist")
else{
    await homeworks.put(id, '', req.body)
    return res.send({status:200, data: 'The homework has been edited'})
}      
}catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    DELETE_HOMEWORK: async (req, res) => {
        try{
const { id } = req.params
const foundHomework = await homeworks.get(id)
if(foundHomework) {
    await homeworks.delete(id)
    return res.send({status:200, data: 'The homework has been deleted'})
}
else throw new Error("The task does not exist")
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}