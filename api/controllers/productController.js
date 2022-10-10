import { Product } from '../models/index.js'

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        return res.status(201).json({
            msg: 'Product created successfully',
            product
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Failed creating product',
            error: error.message
        })
    }
}

const getAllProducts = async (_, res) => {
    try {
        const products = await Product.find();
        return res.json({
            msg: 'Found all products successfully',
            products,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error search products',
            error,
        });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                msg: 'Not found product',
            });
        }
        return res.json({
            msg: 'Found product',
            product,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error getting product by id',
            error,
        });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.json({
            msg: `Product ${product.name} updated successfully`,
            product,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error updating product',
        });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndRemove(id);
        return res.json({
            msg: 'Delete product successfully',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error deleting product',
            error,
        });
    }
};

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct }