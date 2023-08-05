import jwt from 'jsonwebtoken'
const { verify, sign } = jwt
const secret_key = process.env.SECRET_KEY || 'data-key'
export default {
    SIGN: (payload) => {
        try {
        return sign({id: payload}, secret_key)
        } catch (err) {
           return err.message
        }
    },
    VERIFY: (token) => {
try {
    if(verify(token, secret_key) instanceof Error) throw new Error("The token has expired")
    else return verify(token, secret_key)
} catch (err) {
    return err.message
}
    }
}