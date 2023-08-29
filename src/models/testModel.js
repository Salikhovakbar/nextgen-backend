import testSchema from "../schemas/testSchema.js";


class TestMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await testSchema.findById(id)
    else return await testSchema.find(filter, options)
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
return await testSchema.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await testSchema.findByIdAndUpdate(id, data)
else return await testSchema.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await testSchema.findByIdAndDelete(id)
else return await testSchema.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const testMethods = new TestMethods()

export default testMethods