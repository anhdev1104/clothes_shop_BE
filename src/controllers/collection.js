import Collection from '../models/Collection.js';

export const getCollection = async (req, res) => {
    try {
        const data = await Collection.find();
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Collection found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCollectionDetail = async (req, res) => {
    try {
        const data = await Collection.findOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Collection found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addCollection = async (req, res) => {
    try {
        const data = await Collection(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCollection = async (req, res) => {
    try {
        const data = await Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Collection found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCollection = async (req, res) => {
    try {
        const data = await Collection.deleteOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Collection found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
