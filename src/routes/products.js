import express from 'express';
const router = express.Router();
import { getProducts, addProduct, deleteProduct, getProductDetail, updateProduct } from '../controllers/products.js';

router.get('/products/:id', getProductDetail);
router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
