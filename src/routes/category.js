import express from 'express';
const router = express.Router();
import {
    getCategorys,
    addCategory,
    updateCategory,
    deleteCategory,
    getCategoryDetail,
} from '../controllers/category.js';

router.get('/category/:id', getCategoryDetail);
router.get('/category', getCategorys);
router.post('/category', addCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

export default router;
