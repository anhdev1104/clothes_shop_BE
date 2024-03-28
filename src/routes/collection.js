import express from 'express';
const router = express.Router();
import {
    getCollection,
    getCollectionDetail,
    addCollection,
    updateCollection,
    deleteCollection,
} from '../controllers/collection.js';

router.get('/collection/:id', getCollectionDetail);
router.get('/collection', getCollection);
router.post('/collection', addCollection);
router.put('/collection/:id', updateCollection);
router.delete('/collection/:id', deleteCollection);

export default router;
