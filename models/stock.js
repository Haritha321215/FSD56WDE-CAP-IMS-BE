// const mongoose = require('mongoose');

// const stockSchema = new mongoose.Schema({
//   product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to the product
//   quantity: { type: Number, required: true }, // Quantity of the product in stock
//   location: { type: String, required: true }, // Location identifier (e.g., warehouse, shelf)
//   min_quantity: { type: Number, default: 0 }, // Minimum threshold quantity for reordering
//   max_quantity: { type: Number }, // Maximum threshold quantity
//   last_updated: { type: Date, default: Date.now } // Timestamp for when the stock was last updated
// });
// // Virtual to populate buying_price from associated product
// stockSchema.virtual('buying_price').get(function() {
//   if (this.product && this.product.buying_price) {
//     return this.product.buying_price;
//   }
//   return undefined;
// });

// // Virtual to populate selling_price from associated product
// stockSchema.virtual('selling_price').get(function() {
//   if (this.product && this.product.selling_price) {
//     return this.product.selling_price;
//   }
//   return undefined;
// });

// // Virtual to calculate total buying price
// stockSchema.virtual('total_buying_price').get(function() {
//   if (this.product && this.product.buying_price) {
//     return this.product.buying_price * this.quantity;
//   }
//   return undefined;
// });

// // Virtual to calculate total selling price
// stockSchema.virtual('total_selling_price').get(function() {
//   if (this.product && this.product.selling_price) {
//     return this.product.selling_price * this.quantity;
//   }
//   return undefined;
// });
// const Stock = mongoose.model('Stock', stockSchema, "stocks");

// module.exports = Stock;