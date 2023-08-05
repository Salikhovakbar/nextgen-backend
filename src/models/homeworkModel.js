import homework from '../schemas/homeworkSchema.js'


class HomeworkMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await homework.findById(id)
    else return await homework.find(filter, options)
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
return await homework.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await homework.findByIdAndUpdate(id, data)
else return await homework.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await homework.findByIdAndDelete(id)
else return await homework.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const homeworkMethods = new HomeworkMethods()
export default homeworkMethods