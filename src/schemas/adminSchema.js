import { Types, Schema, model } from 'mongoose'

const adminSchema = new Schema({
name: {
    type: String,
    maxLength: [30, 'The name must contain at least 30 words']
},
telephone: {
    type: String,
    unique: true,
    required: true,
    maxLength: [9, 'The max length of phone number is 9']
},
password:{
    type: String,
    minLength: [8, 'The password must contain at least 8 words'],
    required: true
}
},{
 versionKey: false   
})

export default model('admin', adminSchema)