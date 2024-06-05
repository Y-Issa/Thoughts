import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useHttpClient } from "./httpHook";

function useSignup() {
  const { toggleLoginMode, login } = useAuth();
  const { isLoading, localError, fetchData } = useHttpClient();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const responseData = await fetchData(
        "http://localhost:8001/api/user/signup",
        "POST",
        JSON.stringify({
          name,
          email,
          password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      login(responseData.user.id, responseData.user, responseData.token);

      if (!localError.current) {
        localStorage.setItem("user", JSON.stringify(responseData));
      }
    } catch (err) {
      // error handled in the httpHook
    } finally {
      toast({
        title: localError.current ? localError.current : "Signed Up",
        description: localError.current
          ? ""
          : "You have been signed up successfully.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });

      localError.current = null;
      toggleLoginMode();
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleSubmit,
    toggleLoginMode,
  };
}

export default useSignup;
