import { Types, Schema, model } from 'mongoose'


const studentsSchema = new Schema({
    firstname: {
        type: String,
        minLength: [3, 'The name must contain at least three words'],
        maxLength: [30,'The max length of the name must be no more than 30 words'],
        required: true,
        set: value => {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    lastname: {
        type: String,
        minLength: [3, 'The name must contain at least three words'],
        maxLength: [30,'The max length of the name must be no more than 30 words'],
        required: true,
        set: value => {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum : {
            values: ['male', 'female'],
            message: 'Please be natural'
        },
        default: 'male'
    },
    imgLink: {
        type: String
    },
    group_id: {
        type: Types.ObjectId,
        ref: 'groups'
    },
    password: {
        type: String,
        minLength: [8, 'The password must contain at least 8 words'],
        required: true
    },
    telephone: {
        type: String,
        unique: true,
        required: true,
        set: value => {
            if(value.includes("998")){
                return value.split("998").join("")
            }
            else if(value.includes("+998")){
            return value.split("+998").join("")
            }
            else return value
        }
    }
},{
    versionKey: false
})


export default model('students', studentsSchema)