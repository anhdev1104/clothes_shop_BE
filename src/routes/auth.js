import express from 'express';
const router = express.Router();
import { addAccount, getAccounts } from '../controllers/register.js';

router.get('/register', getAccounts);
router.post('/register', addAccount);

export default router;
