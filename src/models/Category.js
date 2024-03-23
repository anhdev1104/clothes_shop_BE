import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        position: {
            type: Number,
        },
        productID: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
