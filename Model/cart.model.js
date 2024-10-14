import mongoose from "mongoose";
const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // ---------- Reference to the User model
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // ---- Reference to the Product model
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    }
}, { timestamps: true }) // ---- Enables timestamps 

const Cart = mongoose.model("Cart", cartSchema)
export default Cart;