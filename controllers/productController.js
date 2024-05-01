// business logic

// import the product model
const Product = require("../models/product");

//define the product controller
const productController = {
  addProduct: async (request, response) => {
    try {
      const {
        productName,
        description,
        buying_price,
        selling_price,
        unit,
        drawer_number,
        reorder_level,
      } = request.body;

      // checks if the product is already in the database
      // need to create product model
      const product = await Product.findOne({ productName });
      // if product exits, return an error
      //other wise create new product object and save it in db
      if (product) {
        return response.status(400).json({ message: "Product already exists" });
      }
      // if product does not exits create new product
      const newProduct = new Product({
        productName,
        description,
        buying_price,
        selling_price,
        unit,
        drawer_number,
        reorder_level,
      });
      // save the product in database
      const saveProduct = await newProduct.save();
      // return the saved product respose to the front end
      response.status(201).json({
        message: "product created successfully",
        product: saveProduct,
      });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  getProductById: async (request, response) => {
    try {
      // get the product id  from the request object
      const productId = request.params.productId;
      // find the product by id from the database
      const product = await Product.findById(productId);

      // if the product does nt exist, return an error
      if (!product) {
        return response.status(400).json({ message: "Product not found" });
      }
      //if the product found
      response.json({ message: "product found", product });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  getProducts: async (request, response) => {
    try {
      // find the products from the database
      const products = await Product.find();

      // if the products does nt exist, return an error
      if (!products) {
        return response.status(400).json({ message: "Products not found" });
      }
      //if the product found
      response.json({ message: "products found", products });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  updateProductById: async (request, response) => {
    try {
      // get the product id  from the request object
      const productId = request.params.productId;
      // get product inprequest.params.productIdestbody
      const { productName } = request.body;

      // find the product by id from the database
      const product = await Product.findById(productId);

      // if the product does not exist, return an error
      if (!product) {
        return response.status(400).json({ message: "Product not found" });
      }

      // update the product if the product exists
      if (productName) product.productName = productName;

      //save the updated product to the database
      const updatedProduct = await product.save();

      //return the updated product to front end
      response.json({ message: "product updated", product: updatedProduct });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  deleteProductById: async (request, response) => {
    try {
      // get the product id  from the request object
      const productId = request.params.productId;

      // find the product by id from the database
      const product = await Product.findById(productId);
      if (!product) {
        return response.status(400).json({ message: "Product not found" });
      }

      //if the product found, then delete the product
      await product.deleteOne();

      //return a suscess message
      response.json({ message: "product has been deleted" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = productController;
