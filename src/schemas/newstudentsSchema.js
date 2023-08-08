import { Schema, Types, model } from 'mongoose'
const students = new Schema({
firstname: {
    type: String,
    required: [true, 'Please enter your name'],
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
,
telephone: {
    type: String,
    required: [true, 'Please enter your phone number'],
    set: value => {
        if(value.includes("+998")){
            return value.split("+998").join("")
        }
        else if(value.includes("998")){
            return value.split("+998").join("")
        }
        else return value
    }
}
},
{
    versionKey: false
})

export default model('newstudents', students)