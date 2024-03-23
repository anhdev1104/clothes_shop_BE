import mongoose from 'mongoose';

const instagramSchema = new mongoose.Schema(
    {
        instaImage: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Instagram = mongoose.model('Instagram', instagramSchema);

export default Instagram;
