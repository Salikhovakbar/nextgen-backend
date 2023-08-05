import mongoose from 'mongoose';

(async () => {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/nextgen')
    console.log("The database has been connected")
} catch (err) {
    console.log(err.message)
}
})()