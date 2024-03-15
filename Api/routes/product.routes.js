const express = require("express");
const router = express.Router();
const { getAllProducts, getSingleProduct, updateProduct, addProduct, deleteProduct } = require("../controllers/product.controller.js");

router.get("/", getAllProducts);//route to get all the products
router.get("/:id", getSingleProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;