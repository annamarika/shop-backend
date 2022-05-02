import Category from "../models/Category";
import { dbConnect } from "../lib/shop-backend";

export const getCategories = async () => {
  await dbConnect();
  const categories = await Category.find();

  return categories.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
};
