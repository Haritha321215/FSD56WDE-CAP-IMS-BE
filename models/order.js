// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   order_number: { type: String, required: true, unique: true },
//   customer_name: { type: String, required: true },
//   items: [{
//     product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     quantity: { type: Number, required: true }
//   }],
//   total_amount: { type: Number, required: true },
//   order_date: { type: Date, default: Date.now },
//   status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' }
// });

// const Order = mongoose.model('Order', orderSchema, 'orders');

// module.exports = Order;