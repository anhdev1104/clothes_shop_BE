import express from 'express';
const router = express.Router();
import {
  getProducts,
  addProduct,
  deleteProduct,
  getProductDetail,
  updateProduct,
  searchProducts,
} from '../controllers/products.js';

router.get('/products/:id', getProductDetail);
router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
// Search product
router.get('/search', searchProducts);

export default router;
