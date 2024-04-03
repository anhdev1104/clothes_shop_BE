import express from 'express';
const app = express();
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/database.js';

import productRouter from './routes/products.js';
import categoryRouter from './routes/category.js';
import sliderRouter from './routes/slider.js';
import instagramRouter from './routes/instagram.js';
import collectionRouter from './routes/collection.js';
import showFashionRouter from './routes/showFashion.js';

app.use(morgan('dev'));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

// connect database
connectDB(process.env.MONGODB_URI);

app.use('/api/v1', productRouter);
app.use('/api/v1', categoryRouter);
app.use('/api/v1', sliderRouter);
app.use('/api/v1', instagramRouter);
app.use('/api/v1', collectionRouter);
app.use('/api/v1', showFashionRouter);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/api/v1`);
});
