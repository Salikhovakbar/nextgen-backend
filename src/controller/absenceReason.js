import absenceReason from '../models/absenceReasonModel.js'
import url from 'url'
import qs from 'querystring'
export default {
    GET_REASONS : async (req, res) => {
        try{
            const { id } = req.params
            const link = url.parse(req.url).query
            if(link){
                const query = qs.parse(link)
                const foundReasons = []
                for(let reason of await absenceReason.get()){
                    let check = 0
                    for(let i in query){
                        const info = reason[i]
                        if(info == query[i]) check++
                        if(info._id == query[i]) check++
                    }
                    if(check == Object.keys(query).length) foundReasons.push(reason)  
                }
                return res.send({status:200, data: foundReasons})
            }
            else{
                if(id && await absenceReason.get(id)) return res.send({status: 200, data: await absenceReason.get(id)})
                else if(id && !(await absenceReason.get(id))) throw new Error("The reason does not exist!")
                else return res.send({status:200, data: await absenceReason.get()})
            }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    POST_REASONS : async (req, res) => {
        try{
            const { reason, student_id, attendance_id } = req.body
            if( !reason || !student_id || !attendance_id ) throw new Error('The data is not full')
            else{
                await absenceReason.post(req.body)
                return res.send({status:200, data: 'The reason has been added'})
            }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    PUT_REASONS : async (req, res) => {
        try{
            const { id } = req.params
            const { reason, student_id, attendance_id } = req.body
            if( !reason && !student_id && !attendance_id) throw new Error("Please make changes!")
            else{
                if(await absenceReason.get(id)){
                    await absenceReason.put(id, '', { reason, student_id, attendance_id })
                return res.send({status:200, data: 'The reason has been edited'})
            }
        else throw new Error('The reason does not exist!')
        }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    DELETE_REASONS : async (req, res) => {
        try{
            const { id } = req.params
            if(!(await absenceReason.get(id))) throw new Error('The reason does not exist!')
            else{
                await absenceReason.delete(id)
                return res.send({status:200, data: 'The reason has been deleted'})
            }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}