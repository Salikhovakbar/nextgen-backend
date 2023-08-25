import sha256 from 'sha256'
import students from '../models/studentsModel.js'
import adminSchema from '../schemas/adminSchema.js'
import groups from '../models/groupsModel.js'
import jwt from '.././utils/jsonwebtoken.js'
import path from 'path'
import fs from 'fs'
import url from 'url';
import qr from 'querystring';
const {SIGN, VERIFY} = jwt
export default {
SIGNUP_STUDENT: async (req, res) => {
    try{
        let { firstname, lastname, age, password, telephone} = req.body
if(!firstname || !lastname || !age || !telephone) throw new Error("The data is not full")
if((await students.get('', {telephone})).length > 0) throw new Error("The user exists!")
else{
   if(password) req.body.password = sha256(password)
    if(req.body.telephone.includes('-')){
        req.body.telephone = req.body.telephone.split("-").join("")
    }
    if(req.body.telephone.includes(' ')){
        req.body.telephone = req.body.telephone.split(" ").join("")
    }
            await students.post(req.body)
            return res.send({status: 200, data: 'The student has been added'})
        }
    }catch(err){
        return res.send({error: err.message, status: 404})
    }
},
LOGIN_STUDENT: async (req, res) => {
    try{
let { telephone, password } = req.body
if(!telephone || !password) throw new Error("The data is not full")
else{
  const user = await students.get(null, {telephone:telephone, password: sha256(password)})
  if(user.length > 0) return res.send({status:200, token: SIGN(user[0]._id), route: '/student-cabinet', data: 'Done'})
else throw new Error('The user does not exist')
}
}catch(err){
        return res.send({status: 404, error: err.message})
    }
},
GETALL_STUDENT: async (req, res) => {
    try{
        const {id} = req.params
        const student = await students.get(id)
        const link = url.parse(req.url).query
        if(link){
            const query = qr.parse(link)
            const foundStudents = []
for(let student of (await students.get(id))){
    let check = 0
    for(let i in query){
        const info = student[i]
        if(info == query[i]) check++
        if(info._id == query[i]) check++
    }
    if(check === Object.keys(query).length) foundStudents.push(student)
}
return res.send({status:200, data: foundStudents})            
        }
        else{
if(id && student) return res.send({status:200, data: (await students.get(id))})
if(id && !student) throw new Error("The student does not exist")
else return res.send({status:200, data: await students.get()})
}
}catch(err){
        return res.send({status:404, error: err.message})
    }
},
PUT_STUDENT: async (req, res) => {
    try{
let { firstname, lastname, age, password, telephone, level, imgLink,group_id, teacher_id } = req.body
const { id } = req.params
const { token } = req.headers
// console.log(await students.get(id))
const found = await students.get(id)
if(found){
    if(!firstname && !lastname && !age && !password && !telephone && !level && !group_id && !imgLink && !teacher_id) throw new Error("Please make changes")
    else{
        if(await students.get((await VERIFY(token)).id)){
        if(password) password = sha256(password)
    if(!(found.imgLink.includes('user.png')) && req.body.imgLink)  fs.unlinkSync(path.join(process.cwd(), 'public', 'images', found.imgLink.split("/")[found.imgLink.split("/").length - 1]))
            await students.put(id, '', {password, imgLink})
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
  if(group_id){
   req.body.teacher_id = (await groups.get(group_id)).teacher_id._id
  }      
  await students.put(id, '', req.body)
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
DELETE_STUDENT: async (req, res) => {
    try{
const { id } = req.params
const found = (await students.get(id))
if(found){
  if(!(found.imgLink.includes('user.png')))  fs.unlinkSync(path.join(process.cwd(), 'public', 'images', found.imgLink.split("/")[found.imgLink.split("/").length - 1]))
    await students.delete(id)
    return res.send({status:200, data: 'The user has been successfully deleted'})
}
else throw new Error("The user does not exist")
    }catch(err){
        return res.send({status:404, error: err.message})
    }
}
}