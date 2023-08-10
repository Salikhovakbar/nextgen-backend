import teachers from '../models/teachers-data.js'

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
const { teacher_name, img_link } = req.body
if(!teacher_name || !img_link) throw new Error("the data is not full")
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
        const { teacher_name, img_link } = req.body
if(!teacher_name && !img_link) throw new Error("Please make changes")
if(id && !(await teachers.get(id))) throw new Error("The teacher does not exist!")
else{
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
if(id && !(await teachers.get(id))) throw new Error("The teacher does not exist!")
else{
    await teachers.delete(id)
    return res.send({status:200, data:'The teacher has been deleted'})
}
    }catch(err){
        return res.send({status:404, error: err.message})
    }
}
}