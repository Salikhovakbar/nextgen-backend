import paymentSchema from '../schemas/paymentSchema.js'

class PaymentMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await paymentSchema.findById(id).populate('group_id').populate('teacher_id')
    else return await paymentSchema.find(filter, options).populate('group_id').populate('teacher_id')
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
return await paymentSchema.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await paymentSchema.findByIdAndUpdate(id, data)
else return await paymentSchema.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await paymentSchema.findByIdAndDelete(id)
else return await paymentSchema.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const paymentMethods = new PaymentMethods()

export default paymentMethods