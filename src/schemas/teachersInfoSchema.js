import { Types, model, Schema } from 'mongoose'

const infoSchema = new Schema({
    teacher_name: {
        type: String
    },
    imgLink: {
        type: String
    }
})

export default model('teacher-data', infoSchema)