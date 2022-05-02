import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductCreateForm() {
  const [nameValue, setNameValue] = useState("");

  const [descriptionValue, setDescriptionValue] = useState("");

  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/category/create/", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,

        description: descriptionValue,
      }),
    });
    console.log(await response.json());
    router.push("/categories");
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
