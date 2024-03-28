import express from 'express';
const router = express.Router();
import {
    getShowFashion,
    getShowFashionDetail,
    addShowFashion,
    updateShowFashion,
    deleteShowFashion,
} from '../controllers/showFashion.js';

router.get('/showfashion/:id', getShowFashionDetail);
router.get('/showfashion', getShowFashion);
router.post('/showfashion', addShowFashion);
router.put('/showfashion/:id', updateShowFashion);
router.delete('/showfashion/:id', deleteShowFashion);

export default router;
