import mongoose from 'mongoose';

const showFashionSchema = new mongoose.Schema(
    {
        showFashionImage: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const ShowFashion = mongoose.model('ShowFashion', showFashionSchema);

export default ShowFashion;
