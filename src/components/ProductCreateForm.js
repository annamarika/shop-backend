import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductCreateForm() {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/product/create/", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        category: categoryValue,
        price: priceValue,
        description: descriptionValue,
        tag: tagsValue,
      }),
    });
    console.log(await response.json());
    router.push("/products");
  };

  return (
    <>
      <form onSubmit={submit}>
        <label>Name</label>
        <input
          name="name"
          label="Name"
          type="text"
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
        />
        <label>Category</label>
        <input
          name="category"
          label="Category"
          type="text"
          value={categoryValue}
          onChange={(event) => {
            setCategoryValue(event.target.value);
          }}
        />
        <label>Price</label>
        <input
          name="price"
          label="Price"
          type="text"
          value={priceValue}
          onChange={(event) => {
            setPriceValue(event.target.value);
          }}
        />
        <label>Description</label>
        <input
          name="description"
          label="Description"
          type="text"
          value={descriptionValue}
          onChange={(event) => {
            setDescriptionValue(event.target.value);
          }}
        />
        <label>Tags</label>
        <input
          name="tags"
          label="Tags"
          type="text"
          placeholder="divided by comma,"
          value={tagsValue}
          onChange={(event) => {
            const tagsArray = event.target.value.split(",");
            setTagsValue(tagsArray);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
