import Account from '../models/Account.js';

export const getAccounts = async (req, res) => {
  try {
    console.log('Register');
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

    const newAccount = new Account({ fullname, email, password, address, phonenumber });
    await newAccount.save();

    return res.status(200).json({ message: 'Tạo tài khoản thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
