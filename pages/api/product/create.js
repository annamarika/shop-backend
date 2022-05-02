import { dbConnect } from "../../../src/lib/shop-backend";
import Product from "../../../src/models/Product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    await dbConnect();

    /*  let product = await Category.findOne({ name: data.name });

    if (!product) {
      product = await Category.create({ name: data.name });
    }*/

    const newProduct = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price,
      tags: data.tags,
      category: data.category,
    });
    res.status(200).json({
      message: "product created",
      product: newProduct,
    });
  } else {
    res.status(400).json({ error: "wrong method" });
  }
}
