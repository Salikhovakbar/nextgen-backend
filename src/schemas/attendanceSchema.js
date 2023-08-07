import { Types, Schema, model } from 'mongoose'

const magazineSchema = new Schema({
    student_id: {
        type: Types.ObjectId,
        ref: 'students',
        required: true
    },
    group_id:{
        type: Types.ObjectId,
        ref: 'groups',
        required: true
    },
    firstname: {
        type: String,
        set: value => {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    lastname: {
        type: String,
        set: value => {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
},{
    versionKey: false
})

export default model('attendance', magazineSchema)