import students from '../schemas/newstudentsSchema.js'


class StudentMethods{
    async get(id, filter = {}, options = {}){
        try{
            if(id) return await students.findById(id)
            else return await students.find(filter, options)
        }catch(err){
            return err.message
        }
    }
    async post(data){
        try{
return await students.create(data)
        }catch(err){
            return err.message
        }
    }
        async put(id, filter={}, data){
            if(id) return await students.findByIdAndUpdate(id, data)
            else return await students.updateOne(filter, data)
        }
        async delete(id, filter={}){
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