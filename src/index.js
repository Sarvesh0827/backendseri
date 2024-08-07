import express from 'express';
import 'dotenv/config'; 
import connectDb from './index01.js'; // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGODB_URL="mongodb://localhost:27017"
const connectionString = `${MONGODB_URL}/${DB_NAME}`;

console.log('Connection String:', connectionString); // Debugging line

(async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.on("err",()=>{
            console.log("Error",err)
        })
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(`Error in connecting to MongoDB: ${err}`);
    }
})();
*/

connectDb();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});