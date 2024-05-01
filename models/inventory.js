// const mongoose = require('mongoose');

// const inventorySchema = new mongoose.Schema({
//   product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//   location: { type: String, required: true }, // Location identifier (e.g., warehouse, shelf)
//   quantity: { type: Number, required: true },
//   min_quantity: { type: Number, default: 0 }, // Minimum threshold quantity for reordering
//   max_quantity: { type: Number }, // Maximum threshold quantity
//   last_updated: { type: Date, default: Date.now }
// });

// const Inventory = mongoose.model('Inventory', inventorySchema, 'inventory');

// module.exports = Inventory;