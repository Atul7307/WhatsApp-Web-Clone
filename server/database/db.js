import mongoose from 'mongoose';

const Connection = async (username, password) => {
<<<<<<< HEAD
    const URL = `mongodb+srv://atulkesharwani7974:atul7974@cluster0.magjk.mongodb.net/`;
    // const URL = `mongodb+srv://${username}:${password}@whatsapp-clone.fqers4o.mongodb.net/`;
    try {
        await mongoose.connect(URL);
=======
    const URL = `mongodb+srv://${username}:${password}@whatsapp-clone.fqers4o.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
>>>>>>> 0d78fa90298fa5243f8213e16ae34eb854210ca6
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;