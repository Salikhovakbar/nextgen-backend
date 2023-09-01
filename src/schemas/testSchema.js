import { Types, Schema, model } from 'mongoose'

const testSchema = new Schema({
level:{
    type: String
},
stage_level :{
    type: String
},
grammar: [
    {
      test: String,
      correct_answer: {
        type: String, 
        set: value => {
            return value.toLowerCase()
        }
      },
      options: [String]
    }
],
reading: [
    {
    test: String,
    correct_answer: String
    }
],
vocabulary: [
    {
        test: String,
        correct_answer: String
    }
]
},{
    versionKey: false
})

export default model('test', testSchema)