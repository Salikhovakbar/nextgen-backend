import attendance from "../models/attendanceModel.js";
import url from 'url'
import qs from 'querystring'


export default {
    GET_ATTENDANCE: async (req, res) => {
        try{
const { id } = req.params
const link = url.parse(req.url).query
if(link){
    const foundAteendance = []
const query = qs.parse(link)
for(let activness of await attendance.get()){
    let check = 0
    for(let i in query){
        const info = activness[i]
        if(info == query[i])check++
        if(info._id == query[i]) check++
    }
    if(check == Object.keys(query).length) foundAteendance.push(activness)
}
return res.send({status:200, data: foundAteendance})
}
else{
if(id && await attendance.get(id)) return res.send({status:200, data: await attendance.get(id)})
else if(id && !(await attendance.get(id))) throw new Error('The attendance has not been created')
else return res.send({status:200, data: await attendance.get()})}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    POST_ATTENDANCE: async (req, res) => {
        try{
const { group_id, students_id, teacher_id, month} = req.body
if( !group_id || !students_id || !teacher_id || !month) throw new Error("The data is not full")
else{
    await attendance.post(req.body)
    return res.send({status:200, data: 'Then attendance has been created'})
}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    PUT_ATTENDANCE: async (req, res) => {
        try{
            const { id } = req.params
            const { group_id, students_id, teacher_id, month} = req.body
            if(!group_id && !students_id && !teacher_id && !month) throw new Error('Please make changes')
            else if(id && await attendance.get(id)){
                await attendance.put(id, '', req.body)
                return res.send({status:200, data:'The attendance has been updated'})
            }
            else throw new Error("Does not exist!")
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}