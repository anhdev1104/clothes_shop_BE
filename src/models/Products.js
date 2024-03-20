import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        // images: [
        //     {
        //         type: String,
        //     },
        // ],
        price: {
            type: Number,
        },
        // priceOrigin: {
        //     type: Number,
        // },
        // size: [
        //     {
        //         label: {
        //             type: String,
        //         },
        //         quantity: {
        //             type: Number,
        //         },
        //     },
        // ],
        description: {
            type: String,
            maxLength: 500,
        },
        // isActive: {
        //     type: Number,
        // },
    },
    { timestamps: true, versionKey: false }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
