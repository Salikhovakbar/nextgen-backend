import attendanceSchema from "../schemas/attendanceSchema.js"


class AttendanceMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await attendanceSchema.findById(id).populate('group_id')
    else return await attendanceSchema.find(filter, options).populate('group_id')
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
return await attendanceSchema.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await attendanceSchema.findByIdAndUpdate(id, data)
else return await attendanceSchema.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await attendanceSchema.findByIdAndDelete(id)
else return await attendanceSchema.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const attendanceMethods = new AttendanceMethods()

export default attendanceMethods