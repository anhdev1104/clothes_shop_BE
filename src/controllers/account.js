import Account from '../models/Account.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateAccessToken, generateRefreshToken } from '../services/jwtService.js';

export const getAccounts = async (req, res) => {
  try {
    const data = await Account.find();
    if (data.length < 0) {
      return res.status(404).json({ message: 'No account found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccountDetails = async (req, res) => {
  try {
    const data = await Account.findOne({ email: req.params.email });
    if (data.length < 0) {
      return res.status(404).json({ message: 'No Account found' });
    }
    data.password = undefined;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addAccount = async (req, res) => {
  try {
    const { fullname, email, password, address, phonenumber } = req.body;

    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay không
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return res.status(400).json({ message: 'Email đã tồn tại' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAccount = new Account({ fullname, email, password: hashedPassword, address, phonenumber });
    await newAccount.save();

    return res.status(200).json({ message: 'Tạo tài khoản thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const data = await Account.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await Account.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json('Email không tìm thấy !');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      res.status(404).json('Sai mật khẩu !');
    }

    if (user && validPassword) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      const { password, ...dataUser } = user._doc; // Không trả về mật khẩu nhầm tăng tính bảo mật
      res.status(200).json({ ...dataUser, accessToken, refreshToken });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
