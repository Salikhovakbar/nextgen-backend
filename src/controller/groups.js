import groups from "../models/groupsModel.js";


export default {
    GET_GROUPS: async (req, res) => {
        try{
const { id } = req.params
const group = await groups.get(id) 
if(id && group) return res.send({status: 200, data: await groups.get(id)})
if(id && !group) throw new Error("The group does not exist") 
else return res.send({status:200, data: await groups.get()})
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
POST_GROUPS: async (req, res) => {
    try{
const { group_number, teacher_id, group_level } = req.body
if( !group_number ||  !teacher_id ||  !group_level) throw new Error("The data is not full")
else{
    await groups.post(req.body)
    return res.send({status:200, data: 'The group has been created'})
}    
}catch(err){
        return res.send({status:404, error: err.message})
    }
},
PUT_GROUPS: async (req, res) => {
    try{
const { id } = req.params
const { group_number, teacher_id, group_level } = req.body
const group = await groups.get(id)
if(!group_number && !teacher_id && !group_level ) throw new Error("Please make changes")
else if(group){
    await groups.put(id, '', req.body)
    return res.send({status:200, data: 'The group has been updated'})
}
else throw new Error('The group does not exist')
    }catch(err){
        return res.send({status:404, error: err.message})
    }
},
DELETE_GROUPS: async (req, res) => {
    try{
const { id } = req.params
const group = await groups.get(id)
if(group){
    await groups.delete(id)
return res.send({status:200, data: 'The group has been deleted'})
}else throw new Error("The group does not exist")
    }catch(err){
        return res.send({status:404, error: err.message})
    }
}
}