import CreateForm from "../components/create/CreateForm";
import NoAccess from "../components/create/NoAccess";
import { useAuth } from "../contexts/AuthContext";

function Create() {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <CreateForm /> : <NoAccess />}</>;
}

export default Create;
