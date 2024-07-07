import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';

const MONGODB_URL = "mongodb://localhost:27017";
const connectionString = `${MONGODB_URL}/${DB_NAME}`;

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error in connecting to MongoDB: ${error}`);
    }
};

export default connectDb;
