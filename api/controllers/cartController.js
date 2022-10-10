import { Cart } from '../models/index.js'

const createCart = async (req, res) => {
    try {
        const cart = new Cart(req.body)
        await cart.save()
        return res.status(201).json({
            msg: 'cart created successfully',
            cart
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Failed creating prodcartuct',
            error: error.message
        })
    }
}

const getAllCart = async (_, res) => {
    try {
        const carts = await Cart.find();
        return res.json({
            msg: 'Found all carts successfully',
            carts,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error search carts',
            error,
        });
    }
};

const getCartById = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findById(id);
        if (!cart) {
            return res.status(404).json({
                msg: 'Not found cart',
            });
        }
        return res.json({
            msg: 'Found cart',
            cart,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error getting cart by id',
            error,
        });
    }
};

const updateCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.json({
            msg: `cart ${cart.name} updated successfully`,
            cart,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error updating prodcartuct',
        });
    }
};

const deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
        await Cart.findByIdAndRemove(id);
        return res.json({
            msg: 'Delete cart successfully',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error deleting cart',
            error,
        });
    }
};

export { createCart, getAllCart, getCartById, updateCart, deleteCart }