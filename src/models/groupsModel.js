import groups from '../schemas/groupsSchema.js'


class GroupMethods{
    async get(id, filter = {}, options = {}){
try{
    if(id) return await groups.findById(id)
    else return await groups.find(filter, options)
}catch(err){
    return err.message
}
    }
    async post(data){
        try{
await groups.create(data)
        }catch(err){
    return err.message
        }
    }
    async put(id, filter = {}, data){
        try{
if(id) return await groups.findByIdAndUpdate(id, data)
else return await groups.updateOne(filter, data)
        }catch(err){
            return err.message
        }
    }
    async delete(id, filter = {}){
        try{
if(id) return await groups.findByIdAndDelete(id)
else return await groups.deleteOne(filter)
        }catch(err){
            return err.message
        }
    }
}
const groupMethods = new GroupMethods()

export default groupMethods