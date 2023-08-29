import { Types, Schema, model } from 'mongoose'

const testSchema = new Schema({
level:{
    type: String
},
grammar: [
    {
      test: String,
      correct_answer: String
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