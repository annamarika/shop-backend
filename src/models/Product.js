import mongoose from "mongoose";
import Category from "./Category";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  tags: Array,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Product =
  mongoose.models.Product ?? mongoose.model("Product", productSchema);

export default Product;
