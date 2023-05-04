import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config()

const MONGO_STRING = process.env.MONGO_STRING;

// connect to mongodb
export async function DB_Connect() {

    // console.log(process.env.MONGO_STRING);
    mongoose.connect(process.env.MONGO_STRING!);

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    // console.log(process.env.MONGO_STRING)

    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    })
}


