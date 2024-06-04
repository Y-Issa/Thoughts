import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useHttpClient } from "./httpHook";

function useUpdateInfo(onClose) {
  const { user, login } = useAuth();
  const { fetchData, localError, isLoading } = useHttpClient();
  const toast = useToast();

  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let responseData;
    try {
      responseData = await fetchData(
        `http://localhost:8001/api/user/${user.id}`,
        "PATCH",
        JSON.stringify({
          name,
          bio,
          oldPassword,
          newPassword,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {
      // error handled in the httpHook
    } finally {
      toast({
        title: localError.current ? localError.current : "Updated",
        description: localError.current
          ? "Please try again."
          : "Your information has been updated.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      if (!localError.current) {
        onClose();

        login(user.id, responseData.user, responseData.token);
        console.log(responseData);
      }
      localError.current = null;
    }
  }

  return {
    name,
    setName,
    bio,
    setBio,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    handleSubmit,
    isLoading,
  };
}

export default useUpdateInfo;
