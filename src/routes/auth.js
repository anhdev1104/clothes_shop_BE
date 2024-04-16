import express from 'express';
const router = express.Router();
import {
  addAccount,
  getAccountDetails,
  getAccounts,
  deleteAccount,
  loginUser,
  requestRefreshToken,
} from '../controllers/account.js';
import middlewareController from '../middlewares/middlewareController.js';

router.get('/account', middlewareController.verifyToken, getAccounts);
router.delete('/account/:id', middlewareController.verifyTokenAndAdmin, deleteAccount);
router.post('/register', addAccount);
router.get('/login/:email', getAccountDetails);
router.post('/login', loginUser);
// REFRESH TOKEN
router.post('/refresh', requestRefreshToken);

export default router;
