import { Types, Schema, model } from 'mongoose'

const magazineSchema = new Schema({
    students_id: [{
        type: Types.ObjectId,
        ref: 'students',
        unique: true
    }],
    teacher_id: {
type: String,
required: true
    },
    group_id:{
        type: Types.ObjectId,
        ref: 'groups',
        required: true
    },
    month: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

export default model('attendance', magazineSchema)