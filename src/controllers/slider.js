import Slider from '../models/Slider.js';

export const getSlider = async (req, res) => {
    try {
        const data = await Slider.find();
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Slider found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSliderDetail = async (req, res) => {
    try {
        const data = await Slider.findOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Slider found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addSlider = async (req, res) => {
    try {
        const data = await Slider(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateSlider = async (req, res) => {
    try {
        const data = await Slider.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Slider found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteSlider = async (req, res) => {
    try {
        const data = await Slider.deleteOne({ _id: req.params.id });
        if (data.length < 0) {
            return res.status(404).json({ message: 'No Slider found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
