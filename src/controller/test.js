import tests from "../models/testModel.js";
import url from 'url'
import qs from 'querystring'
import { v4 as uuidv4 } from 'uuid';
export default {
    GET_TESTS: async (req, res) => {
        try{
            const { id } = req.params
            const link = url.parse(req.url).query
            if(link){
                const query = qs.parse(link)
                const foundTests = []
                for(let test of await tests.get()){
                    let check = 0
                    for(let i in query){
                        const info = test[i]
                        if(info == query[i]) check++
                        if(info._id == query[i]) check++
                    }
                    if(check === Object.keys(query).length) foundTests.push(test)
                }
                return res.send({status: 200, data: foundTests})
            }
            else{
            if(id && await tests.get(id)) return res.send({status:200, data: await tests.get(id)})
            else if(id && !(await tests.get(id))) throw new Error("The test does not exist!")
            else return res.send({status:200, data: await tests.get()})}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    } ,
    POST_TESTS: async (req, res) => {
        try{
            let { level, grammar, reading, vocabulary, stage_level } = req.body
            if(!level || !grammar || !reading || !vocabulary || !stage_level) throw new Error("The data is not full!")
            else{
                let emptyArr = []
                req.body.grammar.forEach((e, index) => {
                e._id = uuidv4()
                emptyArr.push(e)
                })
                req.body.grammar = emptyArr
                emptyArr = []
                req.body.reading.forEach((e, index) => {
                    e._id = uuidv4()
                    emptyArr.push(e)
                    })
                    req.body.reading = emptyArr
                    emptyArr = []
                    req.body.vocabulary.forEach((e, index) => {
                        e._id = uuidv4()
                        emptyArr.push(e)
                        })
                        req.body.vocabulary = emptyArr
                        emptyArr = []
                await tests.post(req.body)
                return res.send({status:200, data: 'The test has been added'})
            }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    } ,
    PUT_TESTS: async (req, res) => {
        try{
            const { id } = req.params
            const { level, grammar, reading, vocabulary } = req.body
            if(!level && !grammar && !reading && !vocabulary && !stage_level) throw new Error("Please make changes!")
            else{
                if(id && await tests.get(id)){
                    await tests.put(id,'', req.body)
                    return res.send({status: 200, data: 'The test has been edited'})
                }
                else throw new Error('The test does not exist!')
            }
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    } ,
    DELETE_TESTS: async (req, res) => {
        try{
            const { id } = req.params
            if(id && await tests.get(id)){
                await tests.delete(id)
                return res.send({status:200, data: 'The test has been deleted'})
            }
            else throw new Error('The test does not exist!')
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    } 
}