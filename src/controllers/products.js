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
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const data = await Product.deleteOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
