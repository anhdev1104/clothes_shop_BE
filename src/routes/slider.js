import express from 'express';
const router = express.Router();
import { getSlider, getSliderDetail, addSlider, updateSlider, deleteSlider } from '../controllers/slider.js';

router.get('/slider/:id', getSliderDetail);
router.get('/slider', getSlider);
router.post('/slider', addSlider);
router.put('/slider/:id', updateSlider);
router.delete('/slider/:id', deleteSlider);

export default router;
