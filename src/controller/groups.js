import groups from "../models/groupsModel.js";
import url from 'url'
import qr from 'querystring'

export default {
    GET_GROUPS: async (req, res) => {
        try{
const { id } = req.params
const group = await groups.get(id) 
const link = url.parse(req.url).query
if(link){
    const foundGroups = []
const query = qr.parse(link)
for(let group of await groups.get()){
    let check = 0
for(let i in query){
    const info = group[i]
    if(info == query[i]) check++
    if(info._id == query[i]) check++ 
}
if(check == Object.keys(query).length) foundGroups.push(group)
}
return res.send({status:200, data: foundGroups})
}
else{
if(id && group) return res.send({status: 200, data: await groups.get(id)})
if(id && !group) throw new Error("The group does not exist") 
else return res.send({status:200, data: await groups.get()})}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
POST_GROUPS: async (req, res) => {
    try{
const { group_number, teacher_id, group_level, day, time } = req.body
if( !group_number ||  !teacher_id ||  !group_level || !day || !time) throw new Error("The data is not full")
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
const { group_number, teacher_id, group_level, day, time } = req.body
const group = await groups.get(id)
if(!group_number && !teacher_id && !group_level && !day && !time) throw new Error("Please make changes")
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