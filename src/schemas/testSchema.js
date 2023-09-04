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
      options: [{
        _id: String,
        option: String
    }]
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
    options: [{
        _id: String,
        option: String
    }]
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
          options: [{
            _id: String,
            option: String
        }]
    }
]
},{
    versionKey: false
})

export default model('test', testSchema)