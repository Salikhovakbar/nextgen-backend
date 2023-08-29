import tests from "../models/testModel.js";
import url from 'url'
import qs from 'querystring'
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
            const { level, grammar, reading } = req.body
            if(!level || !grammar || !reading) throw new Error("The data is not full!")
            else{
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
            const { level, grammar, reading } = req.body
            if(!level && !grammar && !reading) throw new Error("Please make changes!")
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