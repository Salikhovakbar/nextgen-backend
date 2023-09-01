import mockSchema from "../schemas/mockSchema.js"


class MockMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await mockSchema.findById(id).populate('student_id')
    else return await mockSchema.find(filter, options).populate('student_id')
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
return await mockSchema.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await mockSchema.findByIdAndUpdate(id, data)
else return await mockSchema.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await mockSchema.findByIdAndDelete(id)
else return await mockSchema.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const mockMethods = new MockMethods()

export default mockMethods