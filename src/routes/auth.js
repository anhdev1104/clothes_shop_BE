import express from 'express';
const router = express.Router();
import { addAccount, getAccountDetails, getAccounts, loginUser } from '../controllers/account.js';

router.get('/account', getAccounts);
router.post('/register', addAccount);
router.get('/login/:email', getAccountDetails);
router.post('/login', loginUser);

export default router;
