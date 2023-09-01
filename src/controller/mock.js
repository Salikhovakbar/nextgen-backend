import mockModel from '../models/mockModel.js'
import url from 'url'
import qs from 'querystring'
export default {
GET_EXAMS: async (req, res) => {
try {
    const { id } = req.params
    const link = url.parse(req.url).query
    if(link){
        const foundExams = []
        const query = qs.parse(link)
    for(let exam of await mockModel.get()){
        let check = 0
        for(let i in query){
            const info = exam[i]
            if(info == query[i]) check++
            if(info._id == query[i]) check++
        }
        if(check == Object.keys(query).length) foundExams.push(exam)
    }
    return res.send({status:200, data: foundExams})
    }
    else{
        if(id && await mockModel.get(id)) return res.send({status:200, data: await mockModel.get(id)})
        else if(id && !(await mockModel.get(id))) throw new Error("The data does not exist!")
        else return res.send({status:200, data: await mockModel.get()})
    }
} catch (err) {
    return res.send({status: 404, error: err.message})
}
},
POST_EXAMS: async (req, res) => {
    try {
     const { student_id, email }  = req.body
     if( !student_id || !email ) throw new Error('The data is not full')
     else{
        await mockModel.post({student_id, email})
        return res.send({status:200, data: 'The info has been added'})
     }
    } catch (err) {
        return res.send({status:404, error: err.message})
    }
},
PUT_EXAMS: async (req, res) => {
    try {
        const { id } = req.params
        const { student_id, email ,speaking_score, writing_score }  = req.body
     if( !student_id && !email  && !speaking_score && !writing_score ) throw new Error('Please make changes')
     else{
       if(!(await mockModel.get(id))) throw new Error("The data does not exist!")
       else{
        await mockModel.put(id, '', req.body)
        return res.send({status:200, data: 'The data has been updated'})
       }
     }
    } catch (err) {
        return res.send({status:404, error: err.message})
    }
},
DELETE_EXAMS: async (req, res) => {
    try {
        const { id } = req.params
        if(!(await mockModel.get(id))) throw new Error("The data does not exist!")
        else{
            await mockModel.delete(id)
            return res.send({status:200, data: 'The data has been deleted'})
        }
    } catch (err) {
        return res.send({status:404, error: err.message})
    }
}
}