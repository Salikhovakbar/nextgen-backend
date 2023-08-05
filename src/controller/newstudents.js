import students from '../models/newstudentsModel.js'

export default {
    GET_STUDENTS: async (req, res) => {
        try{
const { id } = req.params
if(id && await students.get(id)) return res.send({status: 200, data: await students.get(id)}) 
else if(id && !(await students.get(id))) throw new Error("The user does not exist!")
else return res.send({status: 200, data: await students.get()})        
}catch(err){
            return res.send({status:404, error:err.message})
        }
    },
    POST_STUDENTS: async (req, res) => {
        try{
const { firstname, lastname, telephone } = req.body
if(!firstname || !lastname || !telephone) throw new Error("The data is not full")
else{
    await students.post(req.body)
    return res.send({status:200, data:'Successful registration'})
}
        }catch(err){
            return err.message
        }
    },
    DELETE_STUDENTS: async (req, res) => {
        try{
            const { id } = req.params
            if(await students.get(id)){
                await students.delete(id)
                return res.send({status:200, data: 'The user has been deleted'})
            }
            else throw new Error("The user does not exist")
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}