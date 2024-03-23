import mongoose from 'mongoose';

const sliderSchema = new mongoose.Schema(
    {
        banner: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Slider = mongoose.model('Slider', sliderSchema);

export default Slider;
