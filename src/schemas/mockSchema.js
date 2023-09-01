import { Types, model, Schema } from 'mongoose'

const mockExam = new Schema({
student_id: {
    type: Types.ObjectId,
    ref: 'students',
    required: true
},
email: {
    type: String,
    maxLength: [30, 'The length of the email is too long']
},
speaking_score:{
    type: String
},
writing_score: {
    type: String
}
},{
    versionKey: false
})


export default model('mock-exams', mockExam)