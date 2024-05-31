import { useState } from "react";
import { redirect } from "react-router-dom";
import CreateForm from "../components/form/CreateForm";

function Create() {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  function addTag() {
    if (!currentTag) return;
    setTags([...tags, currentTag]);
    setCurrentTag("");
  }
  function removeTag(tag) {
    setTags(tags.filter((t) => t !== tag));
  }

  return (
    <CreateForm
      tags={tags}
      currentTag={currentTag}
      setCurrentTag={setCurrentTag}
      addTag={addTag}
      removeTag={removeTag}
      maxW="480px"
    />
  );
}

export async function createAction({ request }) {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    tags: data.getAll("tags"),
  };

  console.log(task);

  return redirect("/");
}

export default Create;
