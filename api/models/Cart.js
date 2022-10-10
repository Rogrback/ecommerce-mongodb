import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    user: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
    ],
    date: {
        type: Number,
        required: true
    },
    specs: {
        type: String,
        required: true
    },
    products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
    ],
    total_cart: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
    ],
})

export default mongoose.model('Cart', cartSchema)