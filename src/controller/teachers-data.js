import teachers from '../models/teachers-data.js'
import fs from 'fs'
import path from 'path'
export default {
TEACHERS_GET: async (req, res) => {
    try{
const { id } = req.params
if(id && await teachers.get(id)) return res.send({status:200, data: await teachers.get(id)})
if(id && !(await teachers.get(id))) throw new Error('does not exist!')
else return res.send({status:200, data: await teachers.get()})
    }catch(err){
        return res.send({status:404, error: err.message})
    }
},
TEACHERS_POST: async (req, res) => {
    try{
const { teacher_name, imgLink } = req.body
if(!teacher_name || !imgLink) throw new Error("the data is not full")
else{
    await teachers.post(req.body)
    return res.send({status:200, data:'The teacher has been added'})
}
    }catch(err){
        return res.send({status:404, error: err.message})
    }
},
TEACHERS_PUT: async (req, res) => {
    try{
const { id } = req.params
        const { teacher_name, imgLink } = req.body
        const found = (await teachers.get(id))
if(!teacher_name && !imgLink) throw new Error("Please make changes")
if(id && !found) throw new Error("The teacher does not exist!")
else{
    if(req.body.imgLink){
        fs.unlinkSync(path.join(process.cwd(), 'public', 'images', found.imgLink.split("/")[found.imgLink.split("/").length - 1]))
    }
    await teachers.put(id, '', req.body)
    return res.send({status:200, data: 'The teacher has been updated'})
}
    }catch(err){
        return res.send({status:404, error: err.message})
    }
},
TEACHERS_DELETE: async (req, res) => {
    try{
const { id } = req.params
const found = (await teachers.get(id))
if(id && !found) throw new Error("The teacher does not exist!")
else{
fs.unlinkSync(path.join(process.cwd(), 'public', 'images', found.imgLink.split("/")[found.imgLink.split("/").length - 1]))
    await teachers.delete(id)
    return res.send({status:200, data:'The teacher has been deleted'})
}
    }catch(err){
        return res.send({status:404, error: err.message})
    }
}
}