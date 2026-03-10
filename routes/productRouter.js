const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Create
router.post("/", productController.createProduct);

// Read all
router.get("/", productController.getAllProducts);

// Read one
router.get("/:id", productController.getProductById);

// Update
router.put("/:id", productController.updateProduct);

// Delete
router.delete("/:id", productController.deleteProduct);

module.exports = router;
