const Products = require("../models/product.model.js");

const getAllProducts = async (req, res) => {
    try {
        const product = await Products.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params; //used to destructure the object received by the req.params
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const product = await Products.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);

        //checks if the given product is present or not
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        //after updating the data we again fetch the data and then displays it
        const updatedProduct = await Products.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id);

        //checks if the given product is present or not
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    addProduct,
    deleteProduct,
    updateProduct
}