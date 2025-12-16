const { Schema, model } = require('mongoose')

const productSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      index: true
    },
    brand: {
      type: String,
      required: true,
      index: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
const Product = model('product', productSchema)

module.exports = Product

