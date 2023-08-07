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
    required: [true, 'Please enter your surname'],
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
},
checked: {
    type: Boolean,
    default: false
}
},
{
    versionKey: false
})

export default model('newstudents', students)