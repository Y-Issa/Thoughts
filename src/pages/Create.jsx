import { redirect } from "react-router-dom";
import CreateForm from "../components/create/CreateForm";

function Create() {
  return <CreateForm />;
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
