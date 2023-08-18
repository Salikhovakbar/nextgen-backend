import sha256 from 'sha256'
import teachers from '../models/teachersModel.js'
import adminSchema from '../schemas/adminSchema.js'
import jwt from '.././utils/jsonwebtoken.js'
const {SIGN, VERIFY} = jwt
export default {
SIGNUP_TEACHER: async (req, res) => {
    try{
        let { firstname, lastname, age, password, telephone} = req.body
if(!firstname || !lastname || !age  || !telephone) throw new Error("The data is not full")
if((await teachers.get('', {telephone})).length > 0) throw new Error("The user exists!")
else{
    if(password) req.body.password = sha256(password)
    if(req.body.telephone.includes('-')){
        req.body.telephone = req.body.telephone.split("-").join("")
        }
        if(req.body.telephone.includes(' ')){
            req.body.telephone = req.body.telephone.split(" ").join("")
        }
            await teachers.post(req.body)
            return res.send({status: 200, data: 'The teacher has been added'})
        }
    }catch(err){
        return res.send({error: err.message, status: 404})
    }
},
LOGIN_TEACHER: async (req, res) => {
    try{
let { telephone, password } = req.body
if(!telephone || !password) throw new Error("The data is not full")
else{
  const user = await teachers.get('', {telephone: req.body.telephone, password: sha256(req.body.password)})
  if(user.length > 0) return res.send({status:200, token: SIGN(user[0]._id), route: '/personal_cabinet', data: 'Done'})
else throw new Error('The user does not exist')
}
}catch(err){
        return res.send({status: 404, error: err.message})
    }
},
GETALL_TEACHER: async (req, res) => {
    try{
        const {id} = req.params
if(id && (await teachers.get(id))) return res.send({status:200, data: await teachers.get(id)})
if(id && !(await teachers.get(id))) throw new Error("The teacher does not exist")
else return res.send({status:200, data: await teachers.get()})
}catch(err){
        return res.send({status:404, error: err.message})
    }
},
PUT_TEACHER: async (req, res) => {
    try{
const { firstname, lastname, age, password, telephone, level, group_id } = req.body
const { id } = req.params
const { token } = req.headers
const found = await teachers.get(id)
if(found){
if(!firstname && !lastname && !age && !password && !telephone && !level && !group_id) throw new Error("Please make changes")
else{
    if((await teachers.get((await VERIFY(token)).id))){
        await teachers.put(id, '', {password: sha256(password)})
    return res.send({status:200, data:'The user has been updated'})
    }
    else if(await adminSchema.findById((await VERIFY(token)).id)){
        if(password) req.body.password = sha256(password)
        if(telephone && req.body.telephone.includes('-')){
        req.body.telephone = req.body.telephone.split("-").join("")
        }
        if(telephone && req.body.telephone.includes(' ')){
            req.body.telephone = req.body.telephone.split(" ").join("")
        }
        if(!(found.imgLink.includes('user.png')) && req.body.imgLink)  fs.unlinkSync(path.join(process.cwd(), 'public', 'images', found.imgLink.split("/")[found.imgLink.split("/").length - 1]))
        await teachers.put(id, '', req.body)
    return res.send({status:200, data:'The user has been updated'})
    }
    else throw new Error("Failed to update the user")
}
}
else throw new Error('The user does not exist')
    }catch(err){
        return res.send({error: err.message, status: 404})
    }
},
DELETE_TEACHER: async (req, res) => {
    try{
const { id } = req.params
const found = (await teachers.get(id))
if(found){
    if(!(found.imgLink.includes('user.png')))  fs.unlinkSync(path.join(process.cwd(), 'public', 'images', found.imgLink.split("/")[found.imgLink.split("/").length - 1]))
    await teachers.delete(id)
    return res.send({status:200, data: 'The user has been successfully deleted'})
}
else throw new Error("The user does not exist")
    }catch(err){
        return res.send({status:404, error: err.message})
    }
}
}