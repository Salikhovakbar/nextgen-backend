import { Types, model, Schema } from 'mongoose'

const paymentSchema = new Schema({
    student_id: {
        type: Types.ObjectId,
        ref: 'students',
required: true
    },
    amount: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
},{
    version_key: false
})

export default model('payments', paymentSchema)