import { useNavigation } from "react-router-dom";
import CreateForm from "../components/create/CreateForm";
import NoAccess from "../components/create/NoAccess";
import { useAuth } from "../contexts/AuthContext";
import { Center, Spinner } from "@chakra-ui/react";

function Create() {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <Center h="79vh">
        <Spinner size="xl" color="primary.400" />
      </Center>
    );
  }

  return <>{isLoggedIn ? <CreateForm /> : <NoAccess />}</>;
}

export default Create;
