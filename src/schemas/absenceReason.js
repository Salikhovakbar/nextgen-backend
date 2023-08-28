import { Types, model, Schema } from 'mongoose'

const absenceReason = new Schema({
    reason: {
        type: String,
        required: true
    },
    attendance_id: {
        type: Types.ObjectId,
        ref: 'attendance',
        required: true
    },
    student_id: {
        type: Types.ObjectId,
        ref: 'students',
        required: true
    },
    date: {
        type: String
    }
},{
    versionKey: false
})

export default model('absence-reason', absenceReason)