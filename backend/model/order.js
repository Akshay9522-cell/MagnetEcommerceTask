const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    name: String,
    email: String,
    address: String,
    phone: String
  },
  items: [
    {
    
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  payment: {
    method: String,
    status: String,
    transactionId: String
  },
  
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
});

module.exports = mongoose.model('Order', orderSchema);