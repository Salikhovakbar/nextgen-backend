import jwt from '../utils/jsonwebtoken.js'
import adminSchema from '../schemas/adminSchema.js'
import sha256 from 'sha256'
const {SIGN, VERIFY} = jwt
export default {
    LOGIN_ADMIN: async (req, res) => {
        try{
const { password, telephone } = req.body
if(!password || !telephone) throw new Error("The application is not full")
else{
const user = await adminSchema.findOne({password: sha256(password), telephone})
if(user) return res.send({status:200, token: SIGN(user._id), route: '/admin_page'})
else throw new Error('The user does not exist')
}
        }catch(err){
            return res.send({status:404, error: err.message})
        }
    }
}