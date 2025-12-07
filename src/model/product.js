import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  isOfferAvailable: {
    type: Boolean,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  actualAmount: {
    type: Number,
    required: true,
  },
  afterDiscount: {
    type: Number,
    required: true,
  },
});

const productSchemaNew  = mongoose.models.Product || mongoose.model('Product', productSchema);

export default productSchemaNew;
