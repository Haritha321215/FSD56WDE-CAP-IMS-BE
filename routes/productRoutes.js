// import the express router
const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middleware/auth")
// define the end points

productRouter.post("/addProduct", auth.verifyToken, auth.isAdmin,productController.addProduct);
productRouter.get("/:productId", auth.verifyToken, auth.isAdmin,productController.getProductById); 
productRouter.get("/", auth.verifyToken, auth.isAdmin,productController.getProducts); 
productRouter.put("/:productId",  auth.verifyToken, auth.isAdmin,productController.updateProductById); 
productRouter.delete("/:productId",  auth.verifyToken, auth.isAdmin, productController.deleteProductById); 



//export the router
module.exports = productRouter;
