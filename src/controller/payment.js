import payments from '../models/paymentModel.js'


export default {
    GET_PAYMENTS: async (req, res) => {
        try{
const { id } = req.params
const found = await payments.get(id)
if(id && found) return res.send({status:200, data: found})
else if(id && !found) throw new Error('The payment does not exist!')
else return res.send({status:200, data: await payments.get()})
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    POST_PAYMENTS: async (req, res) => {
        try{
const { month, amount, student_id } = req.body
if(!month || !amount || !student_id ) throw new Error('The data is not full')
else{
    await payments.post(req.body)
    return res.send({status:200, data: 'The payment has been implemented'})
}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    PUT_PAYMENTS: async (req, res) => {
        try{
            const { id } = req.params
            const { month, amount, student_id } = req.body
            const found = await payments.get(id)
            if(!month && !amount && !student_id ) throw new Error('Please make changes')
            else if(!found) throw new Error("The payment does not exist!")
            else{
                await payments.put(id, '', req.body)
                return res.send({status:200, data: 'The payment has been edited'})
            }            
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    },
    DELETE_PAYMENTS: async (req, res) => {
        try{
            const { id } = req.params
            const found = await payments.get(id)
            if(!found) throw new Error("The payment does not exist!")
            else{
await payments.delete(id)
return res.send({status:200, data: 'The payment has been deleted'})
            }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}