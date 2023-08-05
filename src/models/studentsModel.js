import studentsSchema from "../schemas/studentsSchema.js"


class StudentMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await studentsSchema.findById(id).populate('group_id')
    else return await studentsSchema.find(filter, options).populate('group_id')
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
await studentsSchema.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await studentsSchema.findByIdAndUpdate(id, data)
else return await studentsSchema.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await studentsSchema.findByIdAndDelete(id)
else return await studentsSchema.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const studentMethods = new StudentMethods()

export default studentMethods