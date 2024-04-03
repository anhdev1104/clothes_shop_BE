import Category from '../models/Category.js';
import Product from '../models/Products.js';

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    if (data.length < 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    if (req.body.categoryID) {
      const category = Category.findById(req.body.categoryID);
      await category.updateOne({ $push: { productID: data._id } });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const newCategoryId = req.body.categoryID;

    // get category old of product
    const product = await Product.findById(productId);
    const oldCategoryId = product.categoryID;

    // if new category unduplicated with category old, handle update
    if (oldCategoryId.toString() !== newCategoryId) {
      // 1. Cập nhật sản phẩm với danh mục mới
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

      // 2. Xóa sản phẩm khỏi danh sách sản phẩm cũ của danh mục cũ
      await Category.findByIdAndUpdate(oldCategoryId, { $pull: { productID: productId } });

      // 3. Thêm sản phẩm vào danh sách sản phẩm mới của danh mục mới
      await Category.findByIdAndUpdate(newCategoryId, { $addToSet: { productID: productId } });

      return res.status(200).json(updatedProduct);
    } else {
      // Nếu danh mục mới trùng với danh mục cũ, chỉ cần cập nhật thông tin sản phẩm
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

      return res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Category.updateMany({ productID: req.params.id }, { $pull: { productID: req.params.id } });
    const data = await Product.findByIdAndDelete(req.params.id);
    if (data.length < 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
