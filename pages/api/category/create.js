import { dbConnect } from "../../../src/lib/shop-backend";
import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    await dbConnect();

    /*  let product = await Category.findOne({ name: data.name });

    if (!product) {
      product = await Category.create({ name: data.name });
    }*/

    const newCategory = await Category.create({
      name: data.name,
      description: data.description,
    });
    res.status(200).json({
      message: "product created",
      category: newCategory,
    });
  } else {
    res.status(400).json({ error: "wrong method" });
  }
}
