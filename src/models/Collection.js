import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema(
    {
        collectionImage: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;
