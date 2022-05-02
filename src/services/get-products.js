import Product from "../models/Product";
import { dbConnect } from "../lib/shop-backend";
import Category from "../models/Category";

export const getProducts = async () => {
  await dbConnect();
  const products = await Product.find().populate("category");

  return products.map(({ id, description, price, tags, name, category }) => ({
    name,
    description,
    price,
    tags,
    id,
    category: category.name,
  }));
};
