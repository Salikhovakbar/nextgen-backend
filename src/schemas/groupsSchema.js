import { Types, model, Schema } from 'mongoose'

const groupsSchema = new Schema({
group_number: {
    type: Number,
    required: true,
    unique: true
},
day: {
type: String,
enum:{
    values: ['odd', 'even'],
    message: 'enter either odd or even'
}
},
    group_level: {
        type: String,
        set: value => {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    teacher_id: {
        type: Types.ObjectId,
        ref: 'teachers',
        required: true
    }
},{
    versionKey: false
})

export default model('groups', groupsSchema)