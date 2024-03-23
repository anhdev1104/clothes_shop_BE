import express from 'express';
const router = express.Router();
import {
    getInstagram,
    getInstagramDetail,
    addInstagram,
    updateInstagram,
    deleteInstagram,
} from '../controllers/instagram.js';

router.get('/instagram/:id', getInstagramDetail);
router.get('/instagram', getInstagram);
router.post('/instagram', addInstagram);
router.put('/instagram/:id', updateInstagram);
router.delete('/instagram/:id', deleteInstagram);

export default router;
