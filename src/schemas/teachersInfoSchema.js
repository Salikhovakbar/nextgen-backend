import { Types, model, Schema } from 'mongoose'

const infoSchema = new Schema({
    teacher_name: {
        type: String
    },
    img_link: {
        type: String
    }
})

export default model('teacher-data', infoSchema)