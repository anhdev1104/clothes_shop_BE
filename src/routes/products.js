import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct, getProductDetail } from '../controllers/products.js';
const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductDetail);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
