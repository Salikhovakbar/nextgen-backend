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
        _id: {
            type: String
        },
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
        _id: {
        type: String
    },
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
vocabulary: [
    {
        _id: {
            type: String
        },
        test: String,
        correct_answer: {
            type: String, 
            set: value => {
                return value.toLowerCase()
            }
          },
        options: [String]
    }
]
},{
    versionKey: false
})

export default model('test', testSchema)