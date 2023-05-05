import mongoose from 'mongoose';



const MONGO_STRING = process.env.MONGO_STRING;


export async function dbConnect() {

    
    mongoose.connect(process.env.MONGO_STRING!);

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
   
    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    })
}


