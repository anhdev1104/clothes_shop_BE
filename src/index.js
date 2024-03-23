import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import cors from 'cors';

import connectDB from './config/database.js';
import productRouter from './routes/products.js';
import categoryRouter from './routes/category.js';
import sliderRouter from './routes/slider.js';
import instagramRouter from './routes/instagram.js';

app.use(morgan('dev'));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

// connect database
connectDB(process.env.MONGODB_URI);

app.use(productRouter);
app.use(categoryRouter);
app.use(sliderRouter);
app.use(instagramRouter);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
