import mongoose from 'mongoose';

(async () => {
try {
    await mongoose.connect('mongodb+srv://akbar:ngd7T3b5nkHoSYUb@cluster0.ie7lbnc.mongodb.net/nextgen?retryWrites=true&w=majority')
    console.log("The database has been connected")
} catch (err) {
    console.log(err.message)
}
})()