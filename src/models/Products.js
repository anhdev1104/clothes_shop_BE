import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        images: [
            {
                type: String,
                default: null,
            },
        ],
        price: {
            type: Number,
        },
        priceOrigin: {
            type: Number,
        },
        description: {
            type: String,
        },
        size: [
            {
                _id: false,
                label: {
                    type: String,
                },
                quantity: {
                    type: Number,
                },
            },
        ],
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
        isActive: {
            type: Number,
        },
    },
    { timestamps: true, versionKey: false }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
