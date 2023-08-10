import teachers from '../schemas/teachersInfoSchema.js'


class TeacherMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await teachers.findById(id)
    else return await teachers.find(filter, options)
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
await teachers.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await teachers.findByIdAndUpdate(id, data)
else return await teachers.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await teachers.findByIdAndDelete(id)
else return await teachers.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const teacherMethods = new TeacherMethods()

export default teacherMethods