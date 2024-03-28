import ShowFashion from '../models/ShowFashion.js';

export const getShowFashion = async (req, res) => {
    try {
        const data = await ShowFashion.find();
        if (data.length < 0) {
            return res.status(404).json({ message: 'No ShowFashion found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getShowFashionDetail = async (req, res) => {
    try {
        const data = await ShowFashion.findOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No ShowFashion found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addShowFashion = async (req, res) => {
    try {
        const data = await ShowFashion(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateShowFashion = async (req, res) => {
    try {
        const data = await ShowFashion.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No ShowFashion found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteShowFashion = async (req, res) => {
    try {
        const data = await ShowFashion.deleteOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No ShowFashion found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
