import { v4 as uuidv4 } from 'uuid';
export default (data = []) => {
    let emptyArr = []
    let optionArr = []
    data.forEach((e, index) => {
        e._id = uuidv4()
        e.options.forEach(i => {
            i._id = uuidv4()
           optionArr.push(i)
        })
        e.options = optionArr
        optionArr = []
        emptyArr.push(e)
        })
        data = emptyArr
        emptyArr = []
}