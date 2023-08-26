import groups from "../models/groupsModel.js";
import url from 'url'
import qr from 'querystring'
import attendanceMethods from "../models/attendanceModel.js";

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
    const groupsAll = await groups.get()
    const createdGroup = groupsAll[groupsAll.length - 1]
    await attendanceMethods.post([
        {group_id: createdGroup._id, teacher_id, month: '1'},{group_id: createdGroup._id, teacher_id, month: '1'},
        {group_id: createdGroup._id, teacher_id, month: '1'},{group_id: createdGroup._id, teacher_id, month: '1'},
        {group_id: createdGroup._id, teacher_id, month: '1'},{group_id: createdGroup._id, teacher_id, month: '1'},
        {group_id: createdGroup._id, teacher_id, month: '1'},{group_id: createdGroup._id, teacher_id, month: '1'},
        {group_id: createdGroup._id, teacher_id, month: '1'},{group_id: createdGroup._id, teacher_id, month: '1'},
        {group_id: createdGroup._id, teacher_id, month: '1'},{group_id: createdGroup._id, teacher_id, month: '1'},
        {group_id: createdGroup._id, teacher_id, month: '2'},{group_id: createdGroup._id, teacher_id, month: '2'},
        {group_id: createdGroup._id, teacher_id, month: '2'},{group_id: createdGroup._id, teacher_id, month: '2'},
        {group_id: createdGroup._id, teacher_id, month: '2'},{group_id: createdGroup._id, teacher_id, month: '2'},
        {group_id: createdGroup._id, teacher_id, month: '2'},{group_id: createdGroup._id, teacher_id, month: '2'},
        {group_id: createdGroup._id, teacher_id, month: '2'},{group_id: createdGroup._id, teacher_id, month: '2'},
        {group_id: createdGroup._id, teacher_id, month: '2'},{group_id: createdGroup._id, teacher_id, month: '2'},
        {group_id: createdGroup._id, teacher_id, month: '3'},{group_id: createdGroup._id, teacher_id, month: '3'},
        {group_id: createdGroup._id, teacher_id, month: '3'},{group_id: createdGroup._id, teacher_id, month: '3'},
        {group_id: createdGroup._id, teacher_id, month: '3'},{group_id: createdGroup._id, teacher_id, month: '3'},
        {group_id: createdGroup._id, teacher_id, month: '3'},{group_id: createdGroup._id, teacher_id, month: '3'},
        {group_id: createdGroup._id, teacher_id, month: '3'},{group_id: createdGroup._id, teacher_id, month: '3'},
        {group_id: createdGroup._id, teacher_id, month: '3'},{group_id: createdGroup._id, teacher_id, month: '3'},
        {group_id: createdGroup._id, teacher_id, month: '4'},{group_id: createdGroup._id, teacher_id, month: '4'},
        {group_id: createdGroup._id, teacher_id, month: '4'},{group_id: createdGroup._id, teacher_id, month: '4'},
        {group_id: createdGroup._id, teacher_id, month: '4'},{group_id: createdGroup._id, teacher_id, month: '4'},
        {group_id: createdGroup._id, teacher_id, month: '4'},{group_id: createdGroup._id, teacher_id, month: '4'},
        {group_id: createdGroup._id, teacher_id, month: '4'},{group_id: createdGroup._id, teacher_id, month: '4'},
        {group_id: createdGroup._id, teacher_id, month: '4'},{group_id: createdGroup._id, teacher_id, month: '4'},
        {group_id: createdGroup._id, teacher_id, month: '5'},{group_id: createdGroup._id, teacher_id, month: '5'},
        {group_id: createdGroup._id, teacher_id, month: '5'},{group_id: createdGroup._id, teacher_id, month: '5'},
        {group_id: createdGroup._id, teacher_id, month: '5'},{group_id: createdGroup._id, teacher_id, month: '5'},
        {group_id: createdGroup._id, teacher_id, month: '5'},{group_id: createdGroup._id, teacher_id, month: '5'},
        {group_id: createdGroup._id, teacher_id, month: '5'},{group_id: createdGroup._id, teacher_id, month: '5'},
        {group_id: createdGroup._id, teacher_id, month: '5'},{group_id: createdGroup._id, teacher_id, month: '5'},
        {group_id: createdGroup._id, teacher_id, month: '6'},{group_id: createdGroup._id, teacher_id, month: '6'},
        {group_id: createdGroup._id, teacher_id, month: '6'},{group_id: createdGroup._id, teacher_id, month: '6'},
        {group_id: createdGroup._id, teacher_id, month: '6'},{group_id: createdGroup._id, teacher_id, month: '6'},
        {group_id: createdGroup._id, teacher_id, month: '6'},{group_id: createdGroup._id, teacher_id, month: '6'},
        {group_id: createdGroup._id, teacher_id, month: '6'},{group_id: createdGroup._id, teacher_id, month: '6'},
        {group_id: createdGroup._id, teacher_id, month: '6'},{group_id: createdGroup._id, teacher_id, month: '6'},
        {group_id: createdGroup._id, teacher_id, month: '7'},{group_id: createdGroup._id, teacher_id, month: '7'},
        {group_id: createdGroup._id, teacher_id, month: '7'},{group_id: createdGroup._id, teacher_id, month: '7'},
        {group_id: createdGroup._id, teacher_id, month: '7'},{group_id: createdGroup._id, teacher_id, month: '7'},
        {group_id: createdGroup._id, teacher_id, month: '7'},{group_id: createdGroup._id, teacher_id, month: '7'},
        {group_id: createdGroup._id, teacher_id, month: '7'},{group_id: createdGroup._id, teacher_id, month: '7'},
        {group_id: createdGroup._id, teacher_id, month: '7'},{group_id: createdGroup._id, teacher_id, month: '7'},
        {group_id: createdGroup._id, teacher_id, month: '8'},{group_id: createdGroup._id, teacher_id, month: '8'},
        {group_id: createdGroup._id, teacher_id, month: '8'},{group_id: createdGroup._id, teacher_id, month: '8'},
        {group_id: createdGroup._id, teacher_id, month: '8'},{group_id: createdGroup._id, teacher_id, month: '8'},
        {group_id: createdGroup._id, teacher_id, month: '8'},{group_id: createdGroup._id, teacher_id, month: '8'},
        {group_id: createdGroup._id, teacher_id, month: '8'},{group_id: createdGroup._id, teacher_id, month: '8'},
        {group_id: createdGroup._id, teacher_id, month: '8'},{group_id: createdGroup._id, teacher_id, month: '8'},
        {group_id: createdGroup._id, teacher_id, month: '9'},{group_id: createdGroup._id, teacher_id, month: '9'},
        {group_id: createdGroup._id, teacher_id, month: '9'},{group_id: createdGroup._id, teacher_id, month: '9'},
        {group_id: createdGroup._id, teacher_id, month: '9'},{group_id: createdGroup._id, teacher_id, month: '9'},
        {group_id: createdGroup._id, teacher_id, month: '9'},{group_id: createdGroup._id, teacher_id, month: '9'},
        {group_id: createdGroup._id, teacher_id, month: '9'},{group_id: createdGroup._id, teacher_id, month: '9'},
        {group_id: createdGroup._id, teacher_id, month: '9'},{group_id: createdGroup._id, teacher_id, month: '9'},
        {group_id: createdGroup._id, teacher_id, month: '10'},{group_id: createdGroup._id, teacher_id, month: '10'},
        {group_id: createdGroup._id, teacher_id, month: '10'},{group_id: createdGroup._id, teacher_id, month: '10'},
        {group_id: createdGroup._id, teacher_id, month: '10'},{group_id: createdGroup._id, teacher_id, month: '10'},
        {group_id: createdGroup._id, teacher_id, month: '10'},{group_id: createdGroup._id, teacher_id, month: '10'},
        {group_id: createdGroup._id, teacher_id, month: '10'},{group_id: createdGroup._id, teacher_id, month: '10'},
        {group_id: createdGroup._id, teacher_id, month: '10'},{group_id: createdGroup._id, teacher_id, month: '10'},
    ])
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
    await attendanceMethods.delete('', {group_id: id})
return res.send({status:200, data: 'The group has been deleted'})
}else throw new Error("The group does not exist")
    }catch(err){
        return res.send({status:404, error: err.message})
    }
}
}