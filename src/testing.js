import express from 'express';
import mongoose from 'mongoose';



const app = express();
const PORT = process.env.PORT || 4000;

const DB_NAME = "videoutube";
const MONGODB_URL = 'mongodb://127.0.0.1:27017';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionString = `${MONGODB_URL}/${DB_NAME}`;
console.log('Connection String:', connectionString); // Debugging line

(async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(`Error in connecting to MongoDB: ${err}`);
    }
})();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
