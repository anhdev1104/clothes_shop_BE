import Category from '../models/Category.js';

export const getCategorys = async (req, res) => {
    try {
        const data = await Category.find();
        if (!data) {
            return res.status(404).json({ message: 'No category found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCategoryDetail = async (req, res) => {
    try {
        // const limit = +req.query?.limit || 8;
        const data = await Category.findById(req.params.id).populate({
            path: 'productID',
            options: { sort: { createdAt: -1 } },
        });
        if (!data) {
            return res.status(404).json({ message: 'No category found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addCategory = async (req, res) => {
    try {
        const data = await Category(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const data = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'No category found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const data = await Category.deleteOne({ _id: req.params.id });
        if (!data) {
            return res.status(404).json({ message: 'No category found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};