import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://atulkesharwani7974:atul7974@cluster0.magjk.mongodb.net/`;
    // const URL = `mongodb+srv://${username}:${password}@whatsapp-clone.fqers4o.mongodb.net/`;
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;