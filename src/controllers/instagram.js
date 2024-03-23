import Instagram from '../models/Instagram.js';

export const getInstagram = async (req, res) => {
    try {
        const data = await Instagram.find();
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Instagram found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getInstagramDetail = async (req, res) => {
    try {
        const data = await Instagram.findOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Instagram found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addInstagram = async (req, res) => {
    try {
        const data = await Instagram(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateInstagram = async (req, res) => {
    try {
        const data = await Instagram.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Instagram found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteInstagram = async (req, res) => {
    try {
        const data = await Instagram.deleteOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Instagram found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
