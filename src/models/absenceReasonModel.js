import absenceSchema from "../schemas/absenceReason.js"


class AbsenceMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await absenceSchema.findById(id).populate('attendance_id').populate('student_id')
    else return await absenceSchema.find(filter, options).populate('attendance_id').populate('student_id')
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
return await absenceSchema.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await absenceSchema.findByIdAndUpdate(id, data)
else return await absenceSchema.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await absenceSchema.findByIdAndDelete(id)
else return await absenceSchema.deleteMany(filter)
        }catch(err){
            return err.message
        }
    }
}
const absenceMethods = new AbsenceMethods()

export default absenceMethods