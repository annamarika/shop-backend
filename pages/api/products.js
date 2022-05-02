import { getProducts } from "../../src/services/get-products";

export default async function handler(req, res) {
  const product = await getProducts();

  res.status(200).json(product);
}
