import { Types, Schema, model } from 'mongoose'

const homeworkSchema = new Schema({
    homework: {
        type: String
    },
    teacher_id:{
        type: Types.ObjectId,
        ref: 'teachers'
    },
    group_id: {
        type: Types.ObjectId,
        ref: 'groups'
    },
    lesson: {
        type: String
    }
},
{
    versionKey: false
})

export default model("homework", homeworkSchema)