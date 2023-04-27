const mongoose = require("mongoose");
const InventorySchema  = new mongoose.Schema({
    productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  operation: {
    type: String,
    required: true,
  },
});

const InventoryModel = mongoose.model("products", InventorySchema);

module.exports = InventoryModel;