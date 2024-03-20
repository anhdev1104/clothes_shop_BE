import express from 'express';
import morgan from 'morgan';
import router from './routes/products.js';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

// connect database
connectDB(process.env.MONGODB_URI);

app.use('/api/v1', router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/api/v1`);
});
