import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import multer from 'multer';
import dotenv from 'dotenv';
import route from './Routes/index.js';

dotenv.config();

const app = express();

// Configure Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'temp/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

// Middlewares
app.use(cors());
app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('temp'));

app.use("/api", route);

// Use Multer for file uploads
app.post('/temp', upload.single('file'), (req, res) => {
    try {
        // File processing logic here
        res.send({ message: "File uploaded successfully." });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DEV_DB_URL || 'mongodb://localhost:27017/myapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connection Succeeded.");
    } catch (err) {
        console.error("Error in DB connection:", err);
        process.exit(1);
    }
};

// Start Server
const startServer = async () => {
    await connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Express app running on port ${port}`);
    });
};

startServer();
